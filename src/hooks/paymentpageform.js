import { useState } from "react";
import show from "../assets/show.svg";
const usePaymentPageForm = () => {
  const [paymentPageForm, setPaymentPageForm] = useState({
    name: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      placeholder: "Name",
    },
    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      placeholder: "Email",
    },
    amount: {
      value: "",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Phone Number",
    },
    message: {
      value: "",
      valid: false,
      type: "text",
      elementType: "textarea",
      placeholder: "Message (Optional)",
    },
  });

  return [paymentPageForm, setPaymentPageForm];
};

export default usePaymentPageForm;
