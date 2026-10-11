import { supabase } from "../../../services/supabase/client";

export async function getPromptById(id: string) {
  const { data, error } = await supabase
    .from("prompts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
