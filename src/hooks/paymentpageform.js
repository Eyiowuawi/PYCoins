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
      label: "Name"
    },
    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      placeholder: "Email",
      label: "Email"
    },
    amount: {
      value: "",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Phone Number",
      label: "Enter Amount"
    },
    message: {
      value: "",
      valid: false,
      type: "text",
      elementType: "textarea",
      placeholder: "Message (Optional)",
      label: "Message"
    },
  });

  return [paymentPageForm, setPaymentPageForm];
};

export default usePaymentPageForm;
