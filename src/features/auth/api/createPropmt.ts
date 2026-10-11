import { supabase } from "../../../services/supabase/client";

export interface CreatePromptInput {
  title: string;
  prompt_text: string;
  image_url: string;
  model: string;
  style: string;
}

export async function createPrompt(input: CreatePromptInput) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in");
  }

  const { data, error } = await supabase
    .from("prompts")
    .insert({
      ...input,
      creator_id: user.id,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
