import { useMutation, useQueryClient } from "react-query";
import { deletePaymentLink } from "../services/paymentLink";

export const useDeletePaymentLink = (id, history) => {
  const queryClient = useQueryClient();
  return useMutation("getpaymentlinksinfo", () => deletePaymentLink(id), {
    refetchOnWindowFocus: false,
    retry: 3,
    onSuccess: () => {
      queryClient.invalidateQueries("getpaymentlinks");

      history.push("/payment/pay");
    },
  });
};
