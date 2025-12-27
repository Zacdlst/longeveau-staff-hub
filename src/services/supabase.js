import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl) throw new Error("supabaseUrl is required.");
if (!supabaseKey) throw new Error("supabaseKey is required.");

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
