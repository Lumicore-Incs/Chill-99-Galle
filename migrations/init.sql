-- Initial schema for Chill 99 orders and users

-- Enable uuid extension (if needed)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Roles
CREATE ROLE web_anon NOINHERIT; -- role used by PostgREST anonymous requests

-- Users table (admin users)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  password_hash TEXT, -- optional if you later add admin login
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  guests TEXT,
  reservation_date DATE,
  reservation_time TIME,
  message TEXT,
  raw_payload JSONB,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Grant minimal permissions to anon role for inserts/selects
GRANT USAGE ON SCHEMA public TO web_anon;
GRANT SELECT ON TABLE orders TO web_anon;
GRANT INSERT ON TABLE orders TO web_anon;
GRANT SELECT ON TABLE users TO web_anon;

-- Grant sequence usage for SERIAL primary keys so inserts by roles that have INSERT can
-- obtain nextval() from the sequence.
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO web_anon;


-- Create role for JWT-authenticated users
CREATE ROLE web_user NOINHERIT;
GRANT web_user TO postgres;

-- Grant more privileged rights to web_user (used with JWT)
GRANT SELECT, INSERT, UPDATE ON TABLE orders TO web_user;
GRANT SELECT ON TABLE users TO web_user;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO web_user;

-- Revoke anon insert in production; for dev you may keep it. To enable JWT-only writes,
-- remove INSERT grant from web_anon and rely on web_user via JWT.
-- REVOKE INSERT ON TABLE orders FROM web_anon;

-- Note: in production you should lock down permissions and require JWTs
