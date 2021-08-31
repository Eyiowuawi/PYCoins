import { getPaymentLinks } from "../services/paymentlink";
import { useQuery } from "react-query";

export const useGetPaymentLinks = () => {
  return useQuery("getpaymentlinks", () => getPaymentLinks(), {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
