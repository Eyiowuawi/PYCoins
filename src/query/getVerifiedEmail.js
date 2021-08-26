import { useQuery } from "react-query";
import { verifyUser } from "../services/auth";

export const useVerifyEmail = (token) => {
  const req = useQuery(
    ["verifyemail", token],
    () => {
      return verifyUser(token);
    },
    {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  );
  return req;
};
