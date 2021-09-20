import { useQuery } from "react-query";
import { getWallets } from "../services/crypto";

export const useGetWallets = async () => {
  return await useQuery("getwallets", () => getWallets());
};
