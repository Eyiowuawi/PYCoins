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
    const { data } = await cryptoBaseUrl.post("/wallet/activate", wallet);
    toast.success(data.message);

    return data.message;
  } catch (error) {
    throw new Error("Error activating wallet");
  }
};

export const deactivateWallet = async (wallet) => {
  try {
    const { data } = await cryptoBaseUrl.post("/wallet/deactivate", wallet);
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
    return data;
  } catch (error) {
    throw new Error("Error processing your request");
  }
};

export const getStaticAddress = async (crypto) => {
  try {
    const { data } = await cryptoBaseUrl.get(`${crypto}/address`);
    return data.data.address;
  } catch (error) {
    throw new Error("Error processing your request");
  }
};

export const getWalletTransactions = async (crypto) => {
  try {
    const { data } = await cryptoBaseUrl.get(`${crypto}/transactions`);
    return data.data.transactions;
  } catch (error) {
    throw new Error("Error processing your request");
  }
};
