import { useQuery } from "react-query";
import { getPaymentLinkTransactions } from "../services/paymentLink";

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
