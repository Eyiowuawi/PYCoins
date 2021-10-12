import { useMutation, useQueryClient } from "react-query";
import { enablePaymentLink } from "../services/userPaymentLink";

export const useEnablePaymentLink = (id) => {
  const queryClient = useQueryClient();
  return useMutation("disablepaymentlink", () => enablePaymentLink(id), {
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: () => queryClient.invalidateQueries("getuserpaymentlink"),
  });
};
