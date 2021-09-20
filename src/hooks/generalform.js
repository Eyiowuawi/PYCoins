import { useState, useContext, useEffect } from "react";
import {
  required,
  phoneNumberCheck,
  emailCheck,
  password,
  confirmPassword,
} from "./../utils/validations";
import { AppContext } from "./../context/index";

import show from "../assets/show.svg";

const useGeneralForm = (profile) => {
  const [personalForm, setPersonalForm] = useState({
    firstName: {
      value: profile?.user?.firstName || "",
      valid: true,
      elementType: "input",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
      validation: required,
      blur: false,
      initialValue: profile?.user?.firstName || "",
    },
    lastName: {
      value: profile?.user?.lastName || "",
      valid: true,
      elementType: "input",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
      validation: required,
      blur: false,
      initialValue: profile?.user?.lastName || "",
    },
    phoneNumber: {
      value: profile?.user?.phoneNumber || "",
      valid: true,
      type: "text",
      elementType: "input",
      placeholder: "Phone Number",
      label: "Phone Number",
      required: true,
      validation: phoneNumberCheck,
      blur: false,
      initialValue: profile?.user?.phoneNumber || "",
      info: "Number must start with a +234",
    },
  });
  const [personalFormValid, setPersonalFormValid] = useState(true);

  const [businessForm, setBusinessForm] = useState({
    businessName: {
      value: profile?.business?.businessName,
      valid: true,
      elementType: "input",
      type: "text",
      label: "Business Name",
      required: true,
      validation: required,
      blur: false,
      initialValue: profile?.business?.businessName,
    },
    businessEmail: {
      value: profile?.business?.businessEmail,
      valid: true,
      type: "email",
      elementType: "input",
      label: "Business Email",
      validation: emailCheck,
      blur: false,
      initialValue: profile?.business?.businessEmail,
    },
    businessAddress: {
      value: profile?.business?.businessAddress,
      valid: true,
      type: "text",
      elementType: "input",
      placeholder: "Business Address",
      label: "Business Address",
      blur: false,
      required: true,
      validation: required,
      initialValue: profile?.business?.businessAddress,
    },
  });

  const [businessFormValid, setBusinessFormValid] = useState(true);

  const [changePasswordForm, setChangePasswordForm] = useState({
    currentPassword: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      image: show,
      label: "Current Password",
      validation: password,
      blur: false,
      required: true,
      show: false,
    },
    password: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      placeholder: "New Password",
      image: show,
      label: "Password",
      validation: password,
      blur: false,
      required: true,
      show: false,
      info: "Password must be alphanumeric, 8 characters long and must contain a  special character",
    },
    confirmPassword: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      image: show,
      label: "Confirm Password",
      validation: confirmPassword,
      blur: false,
      required: true,
      show: false,
    },
  });

  const [changePasswordValid, setChangePasswordValid] = useState(false);

  return [
    personalForm,
    setPersonalForm,
    businessForm,
    setBusinessForm,
    personalFormValid,
    setPersonalFormValid,
    businessFormValid,
    setBusinessFormValid,
    changePasswordForm,
    setChangePasswordForm,
    changePasswordValid,
    setChangePasswordValid,
  ];
};

export default useGeneralForm;
