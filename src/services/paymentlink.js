import { paymentlinkBaseUrl } from "./../constants/baseUrl";
import { toast } from "react-toastify";

export const createPaymentLink = async (params) => {
  try {
    const { data } = await paymentlinkBaseUrl.post("/create", params);
    return data.data;
  } catch (error) {
    // toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const getPaymentLinks = async () => {
  try {
    const { data } = await paymentlinkBaseUrl.get("/?page=1&limit=10");
    return data.data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const getUserPaymentLink = async (id) => {
  try {
    const { data } = await paymentlinkBaseUrl.get(`/single/${id}`);
    return data.data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const deletePaymentLink = async (id) => {
  try {
    await paymentlinkBaseUrl.delete(`/delete/${id}`);
    return true;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const getPaymentInfo = async (slug) => {
  try {
    const { data } = await paymentlinkBaseUrl.get(`/${slug}`);
    return data.data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};
