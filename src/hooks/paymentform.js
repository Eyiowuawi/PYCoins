import { useState } from "react";
import { required } from "./../utils/validations";

const usePaymentForm = (userWallets) => {
  // const [options] = useState()
  const [paymentForm, setPayentForm] = useState({
    pageName: {
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
    description: {
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
      value: [],
      valid: false,
      multiple: true,
      elementType: "select",
      label: "Select Currency",
      options: userWallets?.map((item) => {
        return {
          value: item,
          displayValue: item,
        };
      }),
      validation: required,
      blur: false,
      required: true,
    },
  });

  const [paymentFormValid, setPaymentFormValid] = useState(false);
  return [paymentForm, setPayentForm, paymentFormValid, setPaymentFormValid];
};

export default usePaymentForm;
