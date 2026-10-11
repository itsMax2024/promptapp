import { supabase } from "./client";

export async function testConnection() {
  const { data, error } = await supabase.from("profiles").select("*");

  console.log(data);
  console.log(error);
}
