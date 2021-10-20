import { otpBaseUrl } from "../constants/baseUrl";

export const sendOtp = async (details) => {
  try {
    const { data } = await otpBaseUrl.post("/send-otp", details);
    console.log(data);
  } catch (error) {
    throw new Error("Error processing your request");
  }
};

export const verifyOtp = async (otp) => {
  try {
    const { data } = await otpBaseUrl.post("/verify-otp", otp);
    console.log(data);
  } catch (error) {
    throw new Error("Error processing your request");
  }
};
