import axios from "axios";

const url = "https://obscure-basin-54525.herokuapp.com/api/v1";
const token = localStorage.getItem("token") || null;

export const authBaseUrl = axios.create({
  baseURL: `${url}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userBaseUrl = axios.create({
  baseURL: `${url}/auth`,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
