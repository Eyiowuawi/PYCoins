import { userProfile, getApiKeys } from "../services/user";
import { useQueries, useQuery } from "react-query";
import { useContext } from "react";
import { AppContext } from "./../context/index";

export const useUserProfile = () => {
  const { saveUser, saveApiKeys, state } = useContext(AppContext);

  return useQueries([
    {
      queryKey: ["getuserprofile", 1],
      queryFn: () => userProfile(),
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (data) => saveUser(data),
    },
    {
      queryKey: ["getuserprofile", 2],
      queryFn: () => getApiKeys(),
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (data) => saveApiKeys(data),
    },
  ]);
};
