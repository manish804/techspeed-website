/*
  # Create leads and newsletter tables

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text)
      - `phone` (text)
      - `service` (text)
      - `message` (text)
      - `source` (text)
      - `created_at` (timestamptz)
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `source` (text)
      - `subscribed_at` (timestamptz)
  2. Security
    - Enable RLS on both tables
    - Add insert policy for anonymous users
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  phone text DEFAULT '',
  service text DEFAULT '',
  message text DEFAULT '',
  source text DEFAULT 'contact_page',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous lead submissions"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text DEFAULT 'footer',
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous newsletter signups"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);