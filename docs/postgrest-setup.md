PostgREST + Postgres setup (dev)

This project adds a Postgres database and PostgREST configuration for storing upcoming orders and admin users.

Files added:

- `docker-compose.yml` - runs Postgres and PostgREST for local/dev use.
- `migrations/init.sql` - creates `users` and `orders` tables and grants a minimal `web_anon` role insert/select on `orders`.
- `postgrest.conf` - basic PostgREST configuration for local dev.

How it works

1. Start the stack (requires Docker):

```powershell
# from project root
docker-compose up -d
```

2. Postgres will initialize and run the SQL in `migrations/init.sql` on first start. PostgREST will be available at `http://localhost:3000`.

3. Insert an order from the site by POSTing JSON to `http://localhost:3000/orders`.

Environment vars for the frontend

- `VITE_POSTGREST_URL` - URL of PostgREST API (example: `http://localhost:3000`)
- `VITE_POSTGREST_TOKEN` - optional JWT token if you secure PostgREST with JWT

Security notes

- The provided `migrations/init.sql` grants `web_anon` INSERT/SELECT permissions to `orders` for convenience in development. For production, configure PostgREST to require JWT and limit permissions.
- Do not ship plaintext DB credentials to production. Use environment variables and secrets on your VPS.

Next steps for Hostinger VPS

- Install Docker on the VPS and copy `docker-compose.yml`, `postgrest.conf`, and `migrations/init.sql`.
- Replace DB credentials in `docker-compose.yml` and `postgrest.conf`.
- Optionally configure `PGRST_JWT_SECRET` and revoke anon permissions.

Frontend changes

- `src/pages/Menu.tsx` and `src/pages/Gallery.tsx` now POST to `${VITE_POSTGREST_URL}/orders` before sending EmailJS. If `VITE_POSTGREST_URL` is not set, the front-end will continue to only send EmailJS as before.

If you want, I can also:

- Add an admin page to list orders using PostgREST (no backend needed).
- Secure PostgREST with JWT and create a small script to mint tokens for admin users.

JWT protection (recommended for production)

1. Choose a strong secret and set it as `PGRST_JWT_SECRET` in your environment (do not hardcode in files). Example using Docker Compose:

```yaml
# .env
PGRST_JWT_SECRET=replace_with_a_long_random_secret
```

Then in `docker-compose.yml` ensure PostgREST reads env var (already configured to do so).

2. Revoke anon insert permission in Postgres (in `migrations/init.sql` we included a commented `REVOKE INSERT` line). Run the SQL or edit it so `web_anon` cannot insert.

3. Create JWTs for admin users. Use the included script:

```powershell
# install deps first
npm install
# create a token (example)
node ./scripts/mint-token.js --role web_user --secret "$env:PGRST_JWT_SECRET"
```

The script prints a JWT you can use as `VITE_POSTGREST_TOKEN` in your `.env` for the frontend admin UI and for server-side calls.

4. Verify PostgREST enforces role by trying a POST without Authorization header (should fail) and then with `Authorization: Bearer <token>` (should succeed).

Seeding demo data (optional)

If you want demo orders and a sample admin user inserted into the database, run the seed SQL we added:

```powershell
# from project root (docker-compose must be running)
docker-compose exec db psql -U chill99 -d chill99db -f /docker-entrypoint-initdb.d/seed_demo_data.sql
```

This will insert a few demo orders you can view in the admin UI.

If you see a permission error like:

```
permission denied for sequence orders_id_seq
```

Run the following to grant sequence usage to the roles (for the running DB):

```powershell
docker-compose exec db psql -U chill99 -d chill99db -c "GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO web_anon;"
docker-compose exec db psql -U chill99 -d chill99db -c "GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO web_user;"
```

After running those, retry creating an order from the frontend.


# #################################
Here’s a step-by-step guide for giving a PostgreSQL user access to a table and its sequence so they can insert data without errors like permission denied for sequence. I’ll assume your table is orders, the sequence is orders_id_seq, and the user is chill99.

Step 1: Log in as a superuser

Only a superuser (like postgres) or the owner of the table/sequence can grant permissions.

psql -U postgres -d chill99

Step 2: Check ownership and existing privileges

List tables and sequences:

-- List tables
\dt

-- List sequences
\ds


Check who owns the table/sequence:

\d orders
\d orders_id_seq

Step 3: Grant privileges on the table

To allow chill99 to SELECT, INSERT, UPDATE, or DELETE on the orders table:

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE orders TO chill99;


If you want to allow all operations:

GRANT ALL PRIVILEGES ON TABLE orders TO chill99;

Step 4: Grant privileges on the sequence

Sequences are separate objects. To let chill99 auto-increment the id column:

GRANT USAGE, SELECT, UPDATE ON SEQUENCE orders_id_seq TO chill99;


Or, to give full control:

GRANT ALL PRIVILEGES ON SEQUENCE orders_id_seq TO chill99;

Step 5: (Optional) Change ownership

If chill99 should fully own the table and sequence:

ALTER TABLE orders OWNER TO chill99;
ALTER SEQUENCE orders_id_seq OWNER TO chill99;


This is optional but can simplify permissions in the future.

Step 6: Test the access

Log in as chill99:

psql -U chill99 -d chill99


Insert a row:

INSERT INTO orders (column1, column2) VALUES ('value1', 'value2');


If there’s no error, the user has proper access.