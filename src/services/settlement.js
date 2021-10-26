import { userBaseUrl } from "../constants/baseUrl";

export const getSettlements = async () => {
  try {
    const { data } = await userBaseUrl.get("/settlement/preference");
    return data.data.settlements;
  } catch (error) {
    throw new Error("Error Processing your request");
  }
};

export const addCryptoSettlement = async (details) => {
  try {
    const { data } = await userBaseUrl.post("/settlement/preference", details);
    return data.message;
    throw new Error("Error Processing your request");
  } catch (error) {}
};

export const addBankSettlement = async (details) => {
  try {
    const { data } = await userBaseUrl.post("/settlement/preference", details);
    return data.message;
    throw new Error("Error Processing your request");
  } catch (error) {}
};
