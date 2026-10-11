import { useQuery } from "@tanstack/react-query";
import { getMyPrompts } from "../../auth/api/getMyPrompts";

export function useMyPrompts() {
  return useQuery({
    queryKey: ["my-prompts"],
    queryFn: getMyPrompts,
  });
}
