import { supabase } from "../../../services/supabase/client";

export async function logout() {
  return supabase.auth.signOut();
}
