import { useState } from "react";
import { required, phoneNumberCheck, emailCheck } from "./../utils/validations";

const useGeneralForm = () => {
  const [personalForm, setPersonalForm] = useState({
    firstName: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
      validation: required,
      blur: false,
    },
    lastName: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
      validation: required,
      blur: false,
    },
    phoneNumber: {
      value: "+234",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Phone Number",
      label: "Phone Number",
      required: true,
      validation: phoneNumberCheck,
      blur: false,
      info: "Number must start with a +234",
    },
  });

  const [businessForm, setBusinessForm] = useState({
    businessName: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      label: "Business Name",
      required: true,
      validation: required,
      blur: false,
    },
    businessEmail: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      // placeholder: "Business Email",
      label: "Business Email",
      validation: emailCheck,
      blur: false,
    },
    businessAddress: {
      value: "",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Business Address",
      label: "Business Address",
      blur: false,
      required: true,
      validation: required,
    },
  });

  const [personalFormValid, setPersonalFormValid] = useState(false);
  const [businessFormValid, setBusinessFormValid] = useState(false);

  return [
    personalForm,
    setPersonalForm,
    businessForm,
    setBusinessForm,
    personalFormValid,
    setPersonalFormValid,
    businessFormValid,
    setBusinessFormValid,
  ];
};

export default useGeneralForm