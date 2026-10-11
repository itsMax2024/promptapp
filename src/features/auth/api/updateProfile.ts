import { supabase } from "../../../services/supabase/client";

export async function updateProfile(
  username: string,
  bio: string,
  avatarUrl: string,
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      username,
      bio,
      avatar_url: avatarUrl,
    })
    .eq("id", user.id);

  if (error) {
    throw error;
  }
}
