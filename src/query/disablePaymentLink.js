import { useMutation, useQueryClient } from "react-query";
import { disablePaymentLink } from "../services/userPaymentLink";

export const useDisablePaymentLink = (id, history) => {
  const queryClient = useQueryClient();
  return useMutation("disablepaymentlink", () => disablePaymentLink(id), {
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: () => queryClient.invalidateQueries("getuserpaymentlink"),
  });
};
