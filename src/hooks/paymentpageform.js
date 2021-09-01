import { useState, useEffect } from "react";
import show from "../assets/show.svg";
import { required, emailCheck } from "./../utils/validations";
import { useGetPaymentInfo } from "./../query/getPaymentInfo";
import { useRouteMatch } from "react-router-dom";

const usePaymentPageForm = () => {
  const { params } = useRouteMatch();

  const { data, isLoading } = useGetPaymentInfo(params.slug);
  const [paymentPageForm, setPaymentPageForm] = useState({
    pageName: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      label: "Name",
      required: true,
      validation: required,
      blur: false,
    },
    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      label: "Email",
      required: true,
      validation: emailCheck,
      blur: false,
    },
    amount: {
      value: "",
      valid: false,
      type: "number",
      elementType: "input",
      placeholder: "Number",
      label: "Enter Amount",
      required: true,
      validation: required,
      blur: false,
      readonly: false,
    },
    message: {
      value: "",
      valid: true,
      type: "text",
      elementType: "textarea",
      placeholder: "Message (Optional)",
      label: "Message",
      validation: required,
    },
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setPaymentPageForm((prevState) => {
      return {
        ...prevState,
        amount: {
          ...prevState.amount,
          readonly: data?.isAmountFixed ? true : false,
        },
      };
    });
  }, [data]);

  return [
    paymentPageForm,
    setPaymentPageForm,
    formValid,
    setFormValid,
    isLoading,
    data,
  ];
};

export default usePaymentPageForm;
