import { useState } from "react";
import { required } from "./../utils/validations";

const usePaymentForm = () => {
  const [paymentForm, setPayentForm] = useState({
    name: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      placeholder: "Payment Name",
      label: "Payment Name",
      required: true,
      validation: required,
      blur: false,
    },
    desc: {
      value: "",
      valid: false,
      type: "url",
      elementType: "textarea",
      placeholder: "Description",
      label: "Description",
      required: true,
      validation: required,
      blur: false,
    },
    currency: {
      value: "",
      valid: false,
      elementType: "select",
      label: "Select Currency",
      options: [
        { id: 1, value: "", displayValue: "Select Currency" },
        { id: 4, value: "NGN", displayValue: "NGN" },
        { id: 5, value: "BTC", displayValue: "BTC" },
        { id: 6, value: "ETH", displayValue: "ETH" },
        { id: 8, value: "TET", displayValue: "TET" },
      ],
      validation: required,
      blur: false,
      required: true,
    },
  });

  const [paymentFormValid, setPaymentFormValid] = useState(false);
  return [paymentForm, setPayentForm, paymentFormValid, setPaymentFormValid];
};

export default usePaymentForm;
