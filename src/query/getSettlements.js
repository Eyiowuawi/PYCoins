import { useQuery } from "react-query";
import { getSettlements } from "../services/settlement";
import { AppContext } from "./../context/index";
import { useContext } from "react";

export const useGetSettlements = () => {
  const { saveSettlements } = useContext(AppContext);
  return useQuery("getsettlement", () => getSettlements(), {
    refetchOnWindowFocus: true,
    retry: false,
    onSuccess: (data) => saveSettlements(data),
  });
};
