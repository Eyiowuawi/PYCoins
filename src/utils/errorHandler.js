import { toast } from "react-toastify";

export const errorHandler = (error) => {
  console.assert(error);
  if (!error.response) toast.error(error.message);
  if (error.response && error.response.status) {
    toast.error(error.response.data.message);
  }
  return error;
};
