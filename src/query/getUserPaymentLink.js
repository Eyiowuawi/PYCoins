import { getUserPaymentLink } from "../services/paymentlink";
import { useQuery } from "react-query";

export const useGetUserPaymentLink = (id) => {
  return useQuery("getuserpaymentlink", () => getUserPaymentLink(id), {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
