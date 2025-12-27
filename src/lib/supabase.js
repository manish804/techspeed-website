import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://aievzvfmeciecdgnwxbq.supabase.co'
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZXZ6dmZtZWNpZWNkZ253eGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MzM3MDcsImV4cCI6MjA4MjQwOTcwN30.zkLroa8CjYRsTmOfojwJOjT-3ErWwTw3tXaku2By1AY'

export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export async function submitLead(leadData) {
  if (!supabase) {
    console.warn('Supabase not configured')
    return null
  }

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
  if (!supabase) {
    console.warn('Supabase not configured')
    return null
  }

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
