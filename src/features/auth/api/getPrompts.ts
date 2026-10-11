import { supabase } from "../../../services/supabase/client";

export async function getPrompts() {
  const { data, error } = await supabase
    .from("prompts")
    .select(
      `
  *,
  profiles!prompts_creator_id_fkey (
    username,
    avatar_url
  )
`,
    )

    .order("created_at", {
      ascending: false,
    });
  console.log(data);

  if (error) throw error;

  return data;
}
