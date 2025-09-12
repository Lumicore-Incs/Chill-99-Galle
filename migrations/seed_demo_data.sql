-- Demo seed data for Chill-99
-- Inserts a sample admin user and a few demo orders

INSERT INTO users (name, email, phone, password_hash)
VALUES
  ('Admin User', 'admin@chill99.test', '+94123456789', null)
ON CONFLICT (email) DO NOTHING;

INSERT INTO orders (full_name, email, phone, guests, reservation_date, reservation_time, message, raw_payload, status)
VALUES
  ('Rohan Silva', 'rohan@example.com', '+94771234567', '2 People', '2025-09-20', '19:00', 'Table by the window please', jsonb_build_object('source','website','note','demo order 1'), 'pending'),
  ('Anu Perera', 'anu@example.com', '+94779876543', '4 People', '2025-09-22', '13:30', 'Family lunch', jsonb_build_object('source','website','note','demo order 2'), 'pending'),
  ('Guest', 'guest@example.com', '+94111222333', '1 Person', '2025-09-18', '09:00', 'Breakfast booking', jsonb_build_object('source','website','note','demo order 3'), 'pending')
ON CONFLICT DO NOTHING;

-- Verify rows
SELECT 1;
