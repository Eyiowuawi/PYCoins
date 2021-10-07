import { getPaymentLinkTransactions } from "../services/paymentlink";
import { useQuery } from "react-query";

export const useGetPaymentTransactions = (id) => {
  return useQuery(
    "getpaymentlinkstransactions",
    () => getPaymentLinkTransactions(id),
    {
      refetchOnWindowFocus: false,
      retry: 3,
    }
  );
};
