import { cryptoBaseUrl } from "../constants/baseUrl";
import { toast } from "react-toastify";

export const getCryptos = async () => {
  try {
    const { data } = await cryptoBaseUrl.get("/");
    return data.crypto;
  } catch (error) {
    throw new Error("Error processing request");
  }
};

export const getWallets = async () => {
  try {
    const { data } = await cryptoBaseUrl.get("/wallets");
    return data.wallets;
  } catch (error) {
    throw new Error("Error processing request");
  }
};

export const activateWallet = async (wallet) => {
  try {
    const { data } = await cryptoBaseUrl.post("/add-wallet", wallet);
    toast.success(data.message);

    return data.message;
  } catch (error) {
    throw new Error("Error activating wallet");
  }
};

export const deactivateWallet = async (wallet) => {
  try {
    const { data } = await cryptoBaseUrl.post("/remove-wallet", wallet);
    toast.success(data.message);
    return data.message;
  } catch (error) {
    throw new Error("Error deactivating wallet");
  }
};

export const updateEnvironment = async (environ) => {
  try {
    const { data } = await cryptoBaseUrl.post("/environment", environ);

    return data.message;
  } catch (error) {
    toast.error("Error updating your environment");
    throw new Error("Error processing your request");
  }
};

export const userAcceptedWallet = async () => {
  try {
    const { data } = await cryptoBaseUrl.get("/user-wallet");
    return data.data.wallets.wallets;
  } catch (error) {
    throw new Error("Error Processing your request");
  }
};

export const getEnvironment = async () => {
  try {
    const { data } = await cryptoBaseUrl.get("/environment");
    return data.data.environment;
  } catch (error) {
    throw new Error("Error Processing request");
  }
};

export const requestWithdrawal = async (details) => {
  try {
    const { data } = await cryptoBaseUrl.post("/request-withdrawal", details);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error processing your request");
  }
};
