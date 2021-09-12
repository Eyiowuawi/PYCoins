import { getPaymentInfo } from "../services/paymentlink";
import { useQuery } from "react-query";

export const useGetPaymentInfo = (slug) => {
  return useQuery("getpaymentlinksinfo", () => getPaymentInfo(slug), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
