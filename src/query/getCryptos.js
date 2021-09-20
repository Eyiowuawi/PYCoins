import { useQuery, useQueries } from "react-query";
import { getCryptos, userAcceptedWallet } from "../services/crypto";

export const useGetUserCryptos = () => {
  return useQueries([
    {
      queryKey: ["getusercrypto", 1],
      queryFn: () => getCryptos(),
      refetchOnWindowFocus: false,
      retry: 2,
    },
    {
      queryKey: ["getusercrypto", 2],
      queryFn: () => userAcceptedWallet(),
      refetchOnWindowFocus: false,
      retry: 2,
    },
  ]);
};

export const useGetCrypto = () => {
  return useQuery("getcrypto", () => getCryptos());
};
