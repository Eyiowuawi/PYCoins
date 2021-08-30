import { userBaseUrl } from "../../constants/baseUrl";
import { toast } from "react-toastify";

export const userProfile = async () => {
  const token = localStorage.getItem("token") || null;
  try {
    const { data } = await userBaseUrl.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const switchToBusiness = async (params) => {
  const token = localStorage.getItem("token") || null;

  try {
    const { data } = await userBaseUrl.patch("/switch", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const changeUserImage = async (image) => {
  try {
    const token = localStorage.getItem("token") || null;

    const { data } = await userBaseUrl.patch("/updateImage", image, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error.response);
    toast.error("Error uploading image, pls try agin later");
    throw new Error("Error processing your request");
  }
};

export const updateUserProfile = async (profile) => {
  try {
    const token = localStorage.getItem("token") || null;

    const { data } = await userBaseUrl.patch("/updateuser", profile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("User profile updated Successfully");
    return data;
  } catch (error) {
    console.log(error.response);
    if (
      error.response &&
      (error.response.status >= 400 || error.response.status < 500)
    )
      toast.error(error.response.data.message);
    throw new Error("Error processing your request");
  }
};

export const updateBusinessprofile = async (business) => {
  try {
    const token = localStorage.getItem("token") || null;

    const { data } = await userBaseUrl.patch("/updateBusiness", business, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("User profile updated Successfully");
    return data;
  } catch (error) {
    if (
      error.response &&
      (error.response.status >= 400 || error.response.status < 500)
    )
      toast.error(error.response.data.message);
    throw new Error("Error processing your request");
  }
};
