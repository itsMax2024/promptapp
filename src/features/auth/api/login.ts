import { supabase } from "../../../services/supabase/client";

export async function login(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}
