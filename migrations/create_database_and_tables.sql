-- Consolidated migration: create database roles, tables, grants and seed admin

DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'web_anon') THEN
    CREATE ROLE web_anon NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'web_user') THEN
    CREATE ROLE web_user NOINHERIT;
  END IF;
END
$$;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  password_hash TEXT,
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
  reservation_type TEXT,
  raw_payload JSONB,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Grants for anon role (minimal insert + select)
GRANT USAGE ON SCHEMA public TO web_anon;
GRANT SELECT ON TABLE users TO web_anon;
GRANT SELECT, INSERT ON TABLE orders TO web_anon;

-- Grants for authenticated user role
GRANT SELECT, INSERT, UPDATE ON TABLE orders TO web_user;
GRANT SELECT ON TABLE users TO web_user;

-- Ensure sequences are accessible for inserts
DO $$
DECLARE r record;
BEGIN
  FOR r IN SELECT sequence_schema, sequence_name FROM information_schema.sequences WHERE sequence_schema='public' LOOP
    EXECUTE format('GRANT USAGE, SELECT ON SEQUENCE %I.%I TO web_anon, web_user', r.sequence_schema, r.sequence_name);
  END LOOP;
END$$;

-- Seed admin user (idempotent)
INSERT INTO users (name, email, phone, password_hash)
VALUES ('Admin User', 'dev.mg4@gmail.com', '+94123456789', NULL)
ON CONFLICT (email) DO NOTHING;
