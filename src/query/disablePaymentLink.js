import { useMutation } from "react-query";
import { disablePaymentLink } from "../services/userPaymentLink";

export const useDisablePaymentLink = (id, history) => {
  return useMutation("disablepaymentlink", () => disablePaymentLink(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
