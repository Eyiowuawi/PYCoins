import { useQuery } from "react-query";
import { logout } from "./../services/auth/index";

export const useLogout = () => {
    return useQuery("logout", () => logout(), {
      
  });
};
