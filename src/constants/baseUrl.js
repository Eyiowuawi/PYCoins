import axios from "axios";
import { toast } from "react-toastify";
import { errorHandler } from "./../utils/errorhandler";

const url = "https://api.payercoins.com/api/v1";

export const authBaseUrl = axios.create({
  baseURL: `${url}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 30000,
  // timeoutErrorMessage: "Request timed out, pls try again later",
});

authBaseUrl.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    errorHandler(error);
    return error;
  }
);

export const userBaseUrl = axios.create({
  baseURL: `${url}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 100000,
  timeoutErrorMessage: "Request timed out, pls try again later",
});

userBaseUrl.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error) => {
    return error;
  }
);

userBaseUrl.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    errorHandler(error);
    throw error;
  }
);

export const paymentlinkBaseUrl = axios.create({
  baseURL: `${url}/paymentLink`,
  headers: {
    "Content-Type": "application/json",
  },
});

paymentlinkBaseUrl.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error) => {
    return error;
  }
);

paymentlinkBaseUrl.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    errorHandler(error);
    throw error;
  }
);

export const cryptoBaseUrl = axios.create({
  baseURL: `${url}/crypto`,
  headers: {
    "Content-Type": "application/json",
  },
});

cryptoBaseUrl.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error) => {
    return error;
  }
);

cryptoBaseUrl.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    errorHandler(error);
    throw error;
  }
);
