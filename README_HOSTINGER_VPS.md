**Hostinger VPS Deployment Guide**

This document explains how to deploy the Chill-99-Galle project on a Hostinger VPS (Ubuntu/Debian-based). It covers installing PostgreSQL, preparing the database and roles, installing and running PostgREST, setting up an Nginx reverse proxy with TLS, running migrations and seed data, and configuring the frontend environment variable `VITE_POSTGREST_URL`.

**Assumptions**

- Fresh VPS running Ubuntu 20.04 / 22.04 (adjust apt commands if different).
- You have sudo access to the VPS and can open ports 80/443 and any custom ports you need.
- This repository is available on the VPS (via `git clone` or file upload).

**Quick overview**

- PostgreSQL runs on the VPS and hosts the `chill99db` database.
- PostgREST runs as a systemd service and exposes the API on `http://localhost:3000`.
- Nginx reverse-proxies `https://your-domain` to PostgREST and terminates TLS.

**1. Initial server setup**

Run the following on the VPS as a sudo user:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y curl wget gnupg2 ca-certificates lsb-release software-properties-common
```

**2. Install PostgreSQL**

```bash
sudo apt install -y postgresql postgresql-contrib
sudo systemctl enable --now postgresql
sudo -u postgres psql -c "SELECT version();"
```

Secure Postgres (choose a strong password for the `postgres` account) and optionally open psql for the admin:

```bash
sudo -u postgres psql
-- inside psql (optional): \password postgres
\q
```

**3. Create roles and database for the app**

The project expects a `web_anon` and `web_user` role and a database (defaults in this repo: `chill99db`). Adjust names in `postgrest.conf` if you change them.

Run as sudo user (you will be asked for the `postgres` password if set):

```bash
sudo -u postgres psql -c "CREATE ROLE web_anon NOINHERIT;"
sudo -u postgres psql -c "CREATE ROLE web_user NOINHERIT;"
sudo -u postgres psql -c "CREATE DATABASE chill99db OWNER web_user;"
```

If you prefer to use the `postgres` superuser for initial testing you can, but create dedicated roles for production.

**4. Apply the initial schema and grants**

Copy the migration files to the server (they are in the repository `migrations/`). To apply the initial schema (creates `users` and `orders`) run:

```bash
sudo -u postgres psql -d chill99db -f migrations/init.sql
# The repo also includes migration helpers like create_web_user_and_grants.sql — run them if needed
sudo -u postgres psql -d chill99db -f migrations/create_web_user_and_grants.sql
```

If you prefer a safe idempotent script, use the `migrations/apply_init_local.sql` included in the repo.

**5. Install PostgREST**

Download the latest stable PostgREST binary for Linux (x86_64). Example using v9.x (replace with current stable tag):

```bash
wget https://github.com/PostgREST/postgrest/releases/download/v9.0.0/postgrest-v9.0.0-linux-x64.tar.xz -O postgrest.tar.xz
tar -xJf postgrest.tar.xz
sudo mv postgrest /usr/local/bin/postgrest
sudo chmod +x /usr/local/bin/postgrest
```

Confirm installation:

```bash
postgrest --help
```

**6. Configure PostgREST**

The repository contains `postgrest.conf` and `postgrest.local.conf` examples. Create a config for production (or use the sample and adjust):

- `db-uri` should point to your Postgres server, e.g. `postgres://web_user:YOUR_PASSWORD@localhost:5432/chill99db`
- `db-schema` usually `public`
- `db-anon-role` usually `web_anon`
- `server-port` is the internal port PostgREST listens on (default 3000)

Example `postgrest.conf` (place in `/etc/postgrest/postgrest.conf`):

```ini
db-uri = "postgres://web_user:REPLACE_WITH_PASSWORD@localhost:5432/chill99db"
db-schema = "public"
db-anon-role = "web_anon"
server-port = 3000
# jwt-secret = "your_jwt_secret"
```

For security do NOT commit secrets to git. Use environment variables (see systemd service below) or use a secrets manager.

**7. Run PostgREST as a systemd service (recommended)**

Running PostgREST as a systemd service is the recommended production approach — it allows auto-start at boot, automatic restarts on failure, controlled permissions, and centralized logs via `journalctl`.

Best practice: keep secrets out of unit files. Place your PostgREST config at `/etc/postgrest/postgrest.conf` and store runtime secrets (DB URI, JWT secret) in a separate env file `/etc/postgrest/postgrest.env` with restrictive permissions.

Example file layout (as root):

```text
/etc/postgrest/postgrest.conf
/etc/postgrest/postgrest.env   # secret values (owner root:root, 600)
/usr/local/bin/postgrest      # installed binary
```

Example `postgrest.env` (DO NOT commit this file):

```ini
PGRST_DB_URI=postgres://web_user:REPLACE_WITH_PASSWORD@localhost:5432/chill99db
PGRST_JWT_SECRET=replace_with_a_long_secret
```

Example systemd unit `/etc/systemd/system/postgrest.service`:

```ini
[Unit]
Description=PostgREST API server
After=network.target
Wants=network-online.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/var/lib/postgrest
EnvironmentFile=/etc/postgrest/postgrest.env
ExecStart=/usr/local/bin/postgrest /etc/postgrest/postgrest.conf
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

Deployment steps (as root or via sudo):

```bash
# create directory for config and protect it
sudo mkdir -p /etc/postgrest
sudo chown root:root /etc/postgrest
sudo chmod 700 /etc/postgrest

# copy your config and env (ensure you DO NOT commit env file)
sudo cp postgrest.conf /etc/postgrest/postgrest.conf
# create /etc/postgrest/postgrest.env and add PGRST_DB_URI and PGRST_JWT_SECRET
sudo chown root:root /etc/postgrest/postgrest.env
sudo chmod 600 /etc/postgrest/postgrest.env

# install postgrest binary (already covered earlier)
sudo mv postgrest /usr/local/bin/postgrest
sudo chmod +x /usr/local/bin/postgrest

# enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable --now postgrest

# follow logs
sudo journalctl -u postgrest -f
```

Notes and alternatives:

- If you prefer not to run as `www-data`, create a dedicated service user (e.g. `postgrest`) and give it minimal permissions.
- `EnvironmentFile` keeps secrets out of the unit file and makes rotation easier. Alternatively, use a secrets manager and a small wrapper script that injects env vars at runtime.
- Use `Restart=on-failure` and `RestartSec` to have systemd restart PostgREST automatically after crashes.
- If binding to a privileged port (<1024) is required, run with capability `CAP_NET_BIND_SERVICE` or let Nginx proxy to an unprivileged port.

Security checklist:

- Set `/etc/postgrest/postgrest.env` to `root:root` and mode `600` so only root can read it.
- Keep Postgres only reachable from localhost or internal network; restrict firewall rules.
- Use strong JWT secrets and rotate them periodically.

**8. Set up Nginx reverse proxy and TLS (Let's Encrypt)**

Install Nginx and Certbot:

```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

Create an Nginx server block for your domain (`/etc/nginx/sites-available/chill99.conf`):

```nginx
server {
    listen 80;
    server_name your.domain.tld;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and test Nginx config then obtain TLS certificate:

```bash
sudo ln -s /etc/nginx/sites-available/chill99.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d your.domain.tld
```

Certbot will edit the Nginx configuration for HTTPS. After that your domain should serve the PostgREST API via HTTPS.

**9. Frontend configuration**

Set `VITE_POSTGREST_URL` for the frontend to point to your domain (or to the direct PostgREST public URL):

- In local dev, `.env` in the repo contains `VITE_POSTGREST_URL=http://localhost:3000`.
- For production, the frontend build should use `VITE_POSTGREST_URL=https://your.domain.tld`.

If you host the frontend separately, ensure it is built with this environment variable.

**10. Optional: Run PostgREST with Docker (alternative)**

If you prefer docker, the repo includes `docker-compose.yml` which defines `db` and `postgrest`. To start via docker-compose:

```bash
docker-compose up -d
docker-compose logs -f postgrest
```

This keeps Postgres and PostgREST isolated in containers. When using host Postgres, PostgREST in a container should use `host.docker.internal` as host (or the host IP) in `PGRST_DB_URI`.

**11. Run migrations and seed data**

To apply the repo migrations you can run them with `psql`:

```bash
sudo -u postgres psql -d chill99db -f migrations/init.sql
sudo -u postgres psql -d chill99db -f migrations/create_web_user_and_grants.sql
sudo -u postgres psql -d chill99db -f migrations/20250913_add_reservation_type.sql
sudo -u postgres psql -d chill99db -f migrations/20250913_grant_delete_on_orders.sql
sudo -u postgres psql -d chill99db -f migrations/seed_demo_data.sql  # optional
```

Note: some migrations are idempotent and safe to re-run.

**12. Verification**

- Check PostgREST service status:
  ```bash
  sudo systemctl status postgrest
  sudo journalctl -u postgrest -n 200
  ```
- Test the API locally on the server:
  ```bash
  curl -I http://127.0.0.1:3000
  curl -H "Accept: application/json" https://your.domain.tld/orders
  ```
- Test DB connection from the server:
  ```bash
  sudo -u postgres psql -d chill99db -c "\dt"
  sudo -u postgres psql -d chill99db -c "SELECT id,name,email FROM users LIMIT 5;"
  ```

**13. Troubleshooting / Notes**

- If PostgREST logs show `password authentication failed` ensure the `db-uri` user/password are correct and the role has CONNECT and appropriate grants.
- If PostgREST returns `permission denied to set role "web_anon"` grant membership: `GRANT web_anon TO web_user;` as `postgres`.
- Do not commit secrets (DB passwords, JWT secrets) to git. Use environment variables or systemd unit envs with appropriate file permissions.
- For production security, consider running PostgREST behind an internal network and only exposing Nginx; restrict Postgres to local connections and firewall rules.

**14. Useful commands (summary)**

```bash
# start/stop postgrest
sudo systemctl start postgrest
sudo systemctl stop postgrest
sudo systemctl status postgrest

# check postgres
sudo -u postgres psql -d chill99db -c "\dt"

# view logs
sudo journalctl -u postgrest -f
sudo tail -n 200 /var/log/nginx/error.log
```

-- End of guide --

If you want, I can create the systemd unit and nginx config files for you in this repo (templated), or I can apply the migrations and start PostgREST on the VPS now. Tell me which you prefer.
