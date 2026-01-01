import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lbmjovoszchvxjfxxwus.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxibWpvdm9zemNodnhqZnh4d3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNTEwOTAsImV4cCI6MjA3NjgyNzA5MH0.HiUHBxKNdq0i2mQ_rnNq_fDzI5vNzbNDSerwjKWRQO4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
