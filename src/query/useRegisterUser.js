import { useMutation } from "react-query";
import { registerUser } from "../services/auth";

export const useRegisterUser = async (params) => {
  return await useMutation(["register", params], async () => {
    return await registerUser(params);
  });
};
