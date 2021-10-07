import { deletePaymentLink } from "../services/paymentlink";
import { useMutation, useQueryClient } from "react-query";

export const useDeletePaymentLink = (id, history) => {
  console.log(id);
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
