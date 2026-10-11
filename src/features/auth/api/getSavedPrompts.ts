import { supabase } from "../../../services/supabase/client";

export async function getSavedPrompts() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("saved_prompts")
    .select(
      `
      prompts (*)
    `,
    )
    .eq("user_id", user.id);

  if (error) throw error;

  return data;
}
