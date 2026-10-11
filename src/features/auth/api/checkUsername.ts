import { supabase } from "../../../services/supabase/client";

export async function checkUsername(username: string) {
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .maybeSingle();

  return !!data;
}
