import { userBaseUrl } from "../constants/baseUrl";
import { toast } from "react-toastify";

export const userProfile = async () => {
  try {
    const { data } = await userBaseUrl.get("/profile");
    return data.data;
  } catch (error) {
    throw new Error("Error processing your request");
  }
};

export const getApiKeys = async () => {
  try {
    const { data } = await userBaseUrl.get("/keys");
    return data.data.apiKey;
  } catch (error) {
    console.log(error);
  }
};

export const switchToBusiness = async (params) => {
  try {
    const { data } = await userBaseUrl.patch("/switch", params);
    return data;
  } catch (error) {
    throw new Error("Error processing your request");
  }
};

export const changeUserImage = async (image) => {
  try {
    const token = localStorage.getItem("token") || null;

    const { data } = await userBaseUrl.patch("/updateImage", image);
    toast.success("Photo updated successfully");
    return data;
  } catch (error) {
    toast.error("Error uploading image, pls try agin later");
    throw new Error("Error processing your request");
  }
};

export const updateUserProfile = async (profile) => {
  try {
    const token = localStorage.getItem("token") || null;

    const { data } = await userBaseUrl.patch("/updateuser", profile);
    toast.success("User profile updated Successfully");
    return data;
  } catch (error) {
    toast.error("Error uploading image, pls try agin later");
    throw new Error("Error processing your request");
  }
};

export const updateBusinessprofile = async (business) => {
  try {
    const token = localStorage.getItem("token") || null;

    const { data } = await userBaseUrl.patch("/updateBusiness", business);
    toast.success("User profile updated Successfully");
    return data;
  } catch (error) {
    toast.error("Error uploading image, pls try agin later");
    throw new Error("Error processing your request");
  }
};

export const updatePassword = async (params) => {
  try {
    const token = localStorage.getItem("token") || null;

    const { data } = await userBaseUrl.patch("/updatePassword", params);
    toast.success("Password successfully updated");
    return data.data;
  } catch (error) {
    toast.error("Error uploading image, pls try agin later");
    throw new Error("Error processing your request");
  }
};
