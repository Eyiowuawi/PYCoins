import { useQuery } from "react-query";
import { getStaticAddress } from "../services/crypto";

export const useGetStaticAddress = (crypto) => {
  return useQuery("getstaticaddress", () => getStaticAddress(crypto), {
    refetchOnWindowFocus: true,
    retry: false,
  });
};
