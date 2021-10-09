import { useMutation } from "react-query";
import { disablePaymentLink } from "../services/paymentLink";

export const useDisablePaymentLink = (id, history) => {
  return useMutation("disablepaymentlink", () => disablePaymentLink(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
