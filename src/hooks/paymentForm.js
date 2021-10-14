import { useState, useEffect } from "react";

import { required, notEmptyArray } from "../utils/validations";

const usePaymentForm = (userWallets, editDetails) => {
  const [paymentForm, setPaymentForm] = useState({
    pageName: {
      value: editDetails ? editDetails.pageName : "",
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
      value: editDetails ? editDetails.desc : "",
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
      value: editDetails ? editDetails.cryptos : [],
      valid: false,
      elementType: "select",
      label: "Select Currency",
      options: [],
      validation: notEmptyArray,
      blur: false,
      closeMenuOnSelect: false,
      selected: [],
      singleSelect: false,
    },
  });

  useEffect(() => {
    setPaymentForm((prevState) => {
      return {
        ...prevState,
        currency: {
          ...prevState.currency,
          options: userWallets?.map((item) => {
            return {
              value: item,
              label: item,
            };
          }),
        },
      };
    });
  }, [userWallets]);

  const [paymentFormValid, setPaymentFormValid] = useState(false);
  return [paymentForm, setPaymentForm, paymentFormValid, setPaymentFormValid];
};

export default usePaymentForm;
