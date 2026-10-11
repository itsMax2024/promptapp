import { supabase } from "../../../services/supabase/client";

export async function uploadImage(file: File) {
  const fileExt = file.name.split(".").pop();

  const fileName = `${crypto.randomUUID()}.${fileExt}`;

  const { error } = await supabase.storage
    .from("prompt-images")
    .upload(fileName, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from("prompt-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
}
