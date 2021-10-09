import { useQuery } from "react-query";
import { getPaymentLinks } from "../services/paymentLink";

export const useGetPaymentLinks = () => {
  return useQuery("getpaymentlinks", () => getPaymentLinks(), {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
