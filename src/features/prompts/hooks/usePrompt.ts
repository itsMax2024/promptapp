import { useQuery } from "@tanstack/react-query";
import { getPromptById } from "../../auth/api/getPromptById";

export function usePrompt(id: string) {
  return useQuery({
    queryKey: ["prompt", id],
    queryFn: () => getPromptById(id),
    enabled: !!id,
  });
}
