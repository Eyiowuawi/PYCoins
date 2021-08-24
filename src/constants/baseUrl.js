import axios from "axios";

const url = "https://obscure-basin-54525.herokuapp.com/api/v1";

export const authBaseUrl = axios.create({
  baseURL: `${url}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});
