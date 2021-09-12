import { userProfile, getApiKeys } from "../services/user";
import { useQueries, useQuery } from "react-query";
import { useContext } from "react";
import { AppContext } from "./../context/index";

// export const useUserProfile = () => {
//   return useQuery("getuserprofile", () => userProfile(), {
//     refetchOnWindowFocus: false,
//     retry: 2,
//   });
// };

export const useUserProfile = () => {
  const { saveUser, saveApiKeys, state } = useContext(AppContext);

  return useQueries([
    {
      queryKey: ["getuserprofile", 1],
      queryFn: () => userProfile(),
      refetchOnWindowFocus: false,
      retry: 2,
      onSuccess: (data) => saveUser(data),
    },
    {
      queryKey: ["getuserprofile", 2],
      queryFn: () => getApiKeys(),
      refetchOnWindowFocus: false,
      retry: 2,
      onSuccess: (data) => saveApiKeys(data),
    },
  ]);
};
