import { getPaymentLinkTransactions } from "../services/paymentlink";
import { useQuery } from "react-query";

export const useGetPaymentTransactions = (id) => {
  return useQuery("getpaymentlinks", () => getPaymentLinkTransactions(id), {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
