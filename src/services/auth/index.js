import { authBaseUrl } from "../../constants/baseUrl";
import { toast } from "react-toastify";

// TEST ACCOUNT

// mayowad43@gmail.com
// Dev.Dabiri1
// dev@yopmail.com
export const registerUser = async (params) => {
  try {
    const { data } = await authBaseUrl.post("/signup", params);
    return data;
  } catch (error) {
    if (error.response && error.response.data.status) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Error processing your request");
    }
  }
};

export const loginUser = async (params) => {
  try {
    const { data } = await authBaseUrl.post("/login", params);
    console.log(data)
  } catch (error) {
    if (error && error.response && error.response.data.status) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Error processing your request");
    }
  }
};

export const verifyUser = async (token) => {
  // console.log(token);
  try {
    const { data } = await authBaseUrl.get(
      `/email/verify/?verification_token=${token}`
    );
    console.log(data);
    return data;
  } catch (error) {
    if (error.response && error.response.data.status) {
      toast.error(error.response.data.message);
      throw new Error(error.response.data.message);
    } else {
      toast.error("Error processing your request");
      throw new Error("Error processing request");
    }
  }
};

export const resendEmailVerify = async (email) => {
  try {
    const { data } = await authBaseUrl.put("/email/verify/resend", email);
    toast.success("Email verification sent");
    return data;
  } catch (error) {
    if (error.response && error.response.data.status) {
      toast.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
    toast.error("Error sending email");
  }
};

export const forgotpassword = async (params) => {
  console.log(params);
};
