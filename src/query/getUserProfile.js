import { userProfile } from "../services/user";
import { useQuery } from "react-query";

export const useUserProfile = () => {
  return useQuery("getprofile", () => userProfile(), {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
