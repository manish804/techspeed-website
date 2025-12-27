/*
  # Create Leads Table for Contact Form Submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text, required) - Full name of the prospect
      - `email` (text, required) - Email address
      - `company` (text, optional) - Company name
      - `phone` (text, optional) - Phone number
      - `service` (text, optional) - Selected service interest
      - `message` (text, required) - Message from the prospect
      - `source` (text) - Where the lead came from (contact page, popup, etc.)
      - `status` (text) - Lead status (new, contacted, qualified, converted)
      - `created_at` (timestamptz) - When the lead was submitted
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting new leads (public access for form submissions)
    - Add policy for service role to read all leads (for admin/notifications)

  3. Notes
    - Leads can be submitted by anyone (unauthenticated)
    - Only service role can read leads for security
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  phone text DEFAULT '',
  service text DEFAULT '',
  message text NOT NULL,
  source text DEFAULT 'contact_page',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all leads"
  ON leads
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);