import { supabase } from "../../../services/supabase/client";

export async function signUp(email: string, password: string) {
  return supabase.auth.signUp({
    email,
    password,
  });
}
