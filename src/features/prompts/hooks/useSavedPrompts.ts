import { useQuery } from "@tanstack/react-query";
import { getSavedPrompts } from "../../auth/api/getSavedPrompts";

export function useSavedPrompts() {
  return useQuery({
    queryKey: ["saved-prompts"],
    queryFn: getSavedPrompts,
  });
}
