import { getPaymentLinkInfo } from "../services/paymentlink";
import { useQuery } from "react-query";

export const useGetPaymentLinkInfo = (slug) => {
  return useQuery("getpaymentlinksinfo", () => getPaymentLinkInfo(slug), {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
