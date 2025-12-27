import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function submitLead(leadData) {
  const { data, error } = await supabase
    .from('leads')
    .insert([{
      name: leadData.name,
      email: leadData.email,
      company: leadData.company || '',
      phone: leadData.phone || '',
      service: leadData.service || '',
      message: leadData.message,
      source: leadData.source || 'contact_page'
    }])
    .select()
    .maybeSingle()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function submitNewsletter(email, source = 'footer') {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email, source }])
    .select()
    .maybeSingle()

  if (error) {
    if (error.code === '23505') {
      throw new Error('This email is already subscribed')
    }
    throw new Error(error.message)
  }

  return data
}
