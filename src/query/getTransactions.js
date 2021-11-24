import { useQuery } from "react-query";
import { getTransactions } from "../services/crypto";

export const useGetTransactions = (crypto) => {
  return useQuery("gettransactions", () => getTransactions(crypto), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
