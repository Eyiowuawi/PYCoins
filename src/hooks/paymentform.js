import { useState } from "react";

const usePaymentForm = () => {
  const [paymentForm, setPayentForm] = useState({
    name: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      placeholder: "Payment Name",
    },
    desc: {
      value: "",
      valid: false,
      type: "url",
      elementType: "textarea",
      placeholder: "Description",
    },
    currency: {
      value: "",
      valid: false,
      elementType: "select",
      options: [
        { id: 1, displayValue: "Select Currency" },
        { id: 4, displayValue: "NGN" },
        { id: 5, displayValue: "Dollars" },
        { id: 6, displayValue: "Euros" },
      ],
    },
  });
  return [paymentForm, setPayentForm];
};

export default usePaymentForm;
