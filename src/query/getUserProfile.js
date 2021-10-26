import { useQueries } from "react-query";
import { useContext } from "react";
import { AppContext } from "./../context/index";
import { userProfile, getApiKeys } from "../services/user";
import { getSettlements } from "../services/settlement";

export const useUserProfile = () => {
  const { saveUser, saveApiKeys, saveSettlements } = useContext(AppContext);

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
    // {
    //   queryKey: ["getPreferences", 3],
    //   queryFn: () => getSettlements(),
    //   refetchOnWindowFocus: false,
    //   retry: false,
    //   onSuccess: (data) => saveSettlements(data),
    // },
  ]);
};
