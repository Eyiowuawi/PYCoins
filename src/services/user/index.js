import { userBaseUrl } from "../../constants/baseUrl";
import { toast } from "react-toastify";
export const userProfile = async () => {
  try {
    const { data } = await userBaseUrl.get("/profile");
    return data;
  } catch (error) {
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};

export const switchToBusiness = async (params) => {

  try {
    const { data } = await userBaseUrl.patch("/switch", params);
    return data;
  } catch (error) {
      console.log(error.response)
    toast.error("Error processing your request");
    throw new Error("Error processing your request");
  }
};
