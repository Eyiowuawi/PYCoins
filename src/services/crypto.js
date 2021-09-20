import { cryptoBaseUrl } from "../constants/baseUrl";
import { toast } from "react-toastify";

export const getCryptos = async () => {
  try {
    const { data } = await cryptoBaseUrl.get("/");
    // console.log(data);
    return data.cryptos;
  } catch (error) {
    throw new Error("Error processing request");
  }
};

export const getWallets = async () => {
  try {
    const { data } = await cryptoBaseUrl.get("/wallets");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error processing request");
  }
};

export const activateWallet = async (wallet) => {
  try {
    const { data } = await cryptoBaseUrl.post("/add-wallet", wallet);
    console.log(data.message);
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
    console.log(data);
    return data.message;
  } catch (error) {
    throw new Error("Error deactivating wallet");
  }
};

export const updateEnvironment = async (environ) => {
  try {
    const { data } = await cryptoBaseUrl.post("/environment", environ);
    return data;
  } catch (error) {
    throw new Error("Error processing your request");
  }
};

export const userAcceptedWallet = async () => {
  try {
    const { data } = await cryptoBaseUrl.get("/user-wallet");
    // console.log(data.data.wallets.wallets);
    return data.data.wallets.wallets;
  } catch (error) {
    console.log(error);
    throw new Error("Error Processing your request");
  }
};
