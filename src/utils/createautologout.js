import jwt from "jsonwebtoken";
export const createAutoLogout = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const data = jwt.decode(token);
  if (!data) return false;
  const newDate = new Date(data.exp) * 1000;
  if (newDate < Date.now()) return false;
  return newDate;
};
