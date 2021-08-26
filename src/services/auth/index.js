import { authBaseUrl } from "../../constants/baseUrl";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";

// TEST ACCOUNT

// mayowad43@gmail.com
// Dev.Dabiri1
// dev@yopmail.com

const saveToLocalStorage = (token) => {
  const data = jwt.decode(token);

  localStorage.setItem("token", token);
};
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
    saveToLocalStorage(data.data.token);
  } catch (error) {
    if (error && error.response && error.response.data.status) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Error processing your request");
    }
    throw new Error("Error processing request");
  }
};

export const verifyUser = async (token) => {
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
  try {
    const { data } = await authBaseUrl.post("/forgotPassword", params);
    console.log(data);
    toast.success(data.message);
  } catch (error) {
    console.log(error.response);
    if (error.response) toast.error(error.response.data.message);
    else toast.error("Error processing you request");
  }
};

export const resetPassword = async (passoword, token) => {
  try {
    const { data } = await authBaseUrl.put(
      `/resetPassword/${token}`,
      passoword
    );
    console.log(data);
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
      toast.error("Make another request");
    } else toast.error("Error processing you request");
  }
};

export const logout = async (history) => {
  try {
    const data = await authBaseUrl.get("/logout");
    localStorage.removeItem("token");
    history.push("/auth/login");
  } catch (error) {
    console.log(error);
    throw new Error("Error processing you request");
  }
};

const checkTimeout = (timer, history) => {
  // setTimeout(logout, timer);
  setTimeout(() => {
    return logout(history);
  }, timer);
};

export const autoLogout = (history) => {
  const token = localStorage.getItem("token");
  if (!token) logout(history);
  else {
    const data = jwt.decode(token);
    const newDate = new Date(data.exp) * 1000;
    if (newDate < Date.now()) logout(history);
    const timer = newDate - new Date().getTime();
    checkTimeout(timer, history);
  }
};