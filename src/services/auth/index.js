import { authBaseUrl } from "../../constants/baseUrl";
import { toast } from "react-toastify";

export const registerUser = async (params) => {
  try {
    const { data } = await authBaseUrl.post("/signup", params);
    return data;
  } catch (error) {
    if (error.response && error.response.data.status) {
      await toast.error(error.response.data.message);
    } else {
      toast.error("Error processing your request");
    }
  }
};
