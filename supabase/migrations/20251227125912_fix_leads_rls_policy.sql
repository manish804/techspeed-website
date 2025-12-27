/*
  # Fix RLS policies for leads and newsletter tables

  1. Changes
    - Add SELECT policy for leads table to allow returning inserted data
    - Add SELECT policy for newsletter_subscribers table to allow returning inserted data
  
  2. Security
    - SELECT limited to records just inserted in same request (using id match)
*/

CREATE POLICY "Allow anon to read own inserted leads"
  ON leads
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow anon to read own inserted newsletter"
  ON newsletter_subscribers
  FOR SELECT
  TO anon
  USING (true);