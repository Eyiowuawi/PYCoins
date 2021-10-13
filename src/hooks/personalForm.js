import { useState } from "react";

import {
  password,
  phoneNumberCheck,
  required,
  confirmPassword,
  emailCheck,
} from "../utils/validations";

import show from "../assets/show.svg";

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
    country: {
      value: "",
      valid: false,
      elementType: "select",
      label: "Country",
      options: [
        { id: 2, label: "Nigeria", value: "Nigeria" },
        { id: 3, label: "Togo", value: "Togo" },
        { id: 4, label: "Finland", value: "Finland" },
        { id: 5, label: "Somalia", value: "Somalia" },
        { id: 6, label: "Afghanistan", value: "Afghanistan" },
      ],
      singleSelect: true,
      validation: required,
      blur: false,
      required: true,
      closeMenuOnSelect: true,
    },

    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
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
      show: false,
      info: "Password must be alphanumeric, 8 characters long and must contain a  special character",
    },
    confirm: {
      value: "",
      show: false,
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
