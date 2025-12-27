/*
  # Create Newsletter Subscribers Table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key) - Unique identifier
      - `email` (text, unique, required) - Subscriber email
      - `source` (text) - Where they subscribed from
      - `subscribed_at` (timestamptz) - When they subscribed
      - `is_active` (boolean) - Whether subscription is active

  2. Security
    - Enable RLS
    - Allow anyone to subscribe (insert)
    - Only service role can read subscribers
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text DEFAULT 'footer',
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscribers(is_active);