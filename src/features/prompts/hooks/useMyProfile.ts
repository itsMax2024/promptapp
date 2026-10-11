import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../../auth/api/getMyProfile";

export function useMyProfile() {
  return useQuery({
    queryKey: ["my-profile"],
    queryFn: getMyProfile,
  });
}
