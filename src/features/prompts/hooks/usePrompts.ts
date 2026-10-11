import { useQuery } from "@tanstack/react-query";
import { getPrompts } from "../../auth/api/getPrompts";

export function usePrompts() {
  return useQuery({
    queryKey: ["prompts"],
    queryFn: getPrompts,
  });
}
