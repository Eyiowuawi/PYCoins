import { useQuery } from "react-query";
import { getTransactions } from "../services/crypto";

export const useGetTransactions = (page) => {
  return useQuery(["gettransactions", page], () => getTransactions(page), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
