import { useQuery } from "react-query";
import { getUserPaymentLink } from "../services/paymentLink";

export const useGetUserPaymentLink = (id) => {
  return useQuery("getuserpaymentlink", () => getUserPaymentLink(id), {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
