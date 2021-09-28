import { disablePaymentLink } from "../services/paymentlink";
import { useMutation, useQueryClient } from "react-query";

export const useDisablePaymentLink = (id, history) => {
  return useMutation("disablepaymentlink", () => disablePaymentLink(id), {
    refetchOnWindowFocus: false,
    retry: false,
    // onSuccess: () => {
    //   queryClient.invalidateQueries("getpaymentlinks");
    // },
  });
};
