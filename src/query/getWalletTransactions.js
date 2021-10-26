import { useQuery } from "react-query";
import { getWalletTransactions } from "../services/crypto";
import { AppContext } from "./../context/index";

export const useGetWalletTransactions = (crypto) => {
  return useQuery(
    "getwallettransactions",
    () => getWalletTransactions(crypto),
    {
      refetchOnWindowFocus: true,
      retry: false,
    }
  );
};
