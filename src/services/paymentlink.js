import { paymentlinkBaseUrl } from "./../constants/baseUrl";
import { toast } from "react-toastify";
export const createPaymentLink = async (params) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await paymentlinkBaseUrl.post("/create", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const getPaymentLinks = async () => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await paymentlinkBaseUrl.get("/?page=1&limit=10", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const getUserPaymentLink = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await paymentlinkBaseUrl.get(`/single/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const deletePaymentLink = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await paymentlinkBaseUrl.delete(`/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    if (error.response.status === 404) {
      toast.error("Payment Link not found");
      throw new Error("404");
    } else {
      toast.error("Error processing your request");
    }
  }
};
