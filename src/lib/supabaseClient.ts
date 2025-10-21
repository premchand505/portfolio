import { createClient } from '@supabase/supabase-js'

// Get the Supabase URL and anon key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Throw an error if the variables are not set, to avoid runtime issues
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or anon key is missing from .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
