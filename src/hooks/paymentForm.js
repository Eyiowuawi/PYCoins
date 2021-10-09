import { useState, useEffect } from "react";

import { required, notEmptyArray } from "../utils/validations";

const usePaymentForm = (userWallets, editDetails) => {
  // const [options] = useState()

  const [paymentForm, setPayentForm] = useState({
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
      multiple: true,
      elementType: "select",
      label: "Select Currency",
      options: [],
      validation: notEmptyArray,
      blur: false,
      required: true,
      closeMenuOnSelect: false,
    },
  });

  useEffect(() => {
    setPayentForm((prevState) => {
      return {
        ...prevState,
        currency: {
          ...prevState.currency,
          options: userWallets?.map((item) => {
            return {
              value: item,
              label: item.toUpperCase(),
            };
          }),
        },
      };
    });
  }, [userWallets]);

  const [paymentFormValid, setPaymentFormValid] = useState(false);
  return [paymentForm, setPayentForm, paymentFormValid, setPaymentFormValid];
};

export default usePaymentForm;
