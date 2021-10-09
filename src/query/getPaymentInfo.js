import { useQuery } from "react-query";
import { getPaymentInfo } from "../services/paymentLink";

export const useGetPaymentInfo = (slug) => {
  return useQuery("getpaymentlinksinfo", () => getPaymentInfo(slug), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
