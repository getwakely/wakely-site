import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export async function getWaitlistCount() {
  if (!supabase) return 0
  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
  if (error) {
    console.warn('Failed to fetch waitlist count:', error.message)
    return 0
  }
  return count ?? 0
}
