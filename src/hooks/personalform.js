import { useState } from "react";
import show from "../assets/show.svg";
import {
  password,
  phoneNumberCheck,
  required,
  confirmPassword,
  emailCheck,
} from "../utils/validations";

const usePersonalForm = () => {
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
    number: {
      value: "",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Phone Number",
      label: "Phone Number",
      required: true,
      validation: phoneNumberCheck,
      blur: false,
    },

    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      placeholder: "Email",
      label: "Email",
      required: true,
      blur: false,
      validation: emailCheck,
    },
    password: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      placeholder: "Password",
      image: show,
      label: "Password",
      required: true,
      validation: password,
      blur: false,
      info: "Password must be alphanumeric, 8 characters long and must contain a  special character",
    },
    confirm: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      image: show,
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      validation: confirmPassword,
      blur: false,
    },
  });

  const [formValid, setFormValid] = useState(false);

  return [personalForm, setPersonalForm, formValid, setFormValid];
};

export default usePersonalForm;
