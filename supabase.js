// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// TODO: ganti dengan kredensial projectmu
const SUPABASE_URL = "https://dvnfqoektrgarlplkkaj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bmZxb2VrdHJnYXJscGxra2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMDI2MzksImV4cCI6MjA3MjY3ODYzOX0.c_T4297HqKGo3KZYvWM6qXkiw4saE548Cp-UH7qZ7Ts";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
