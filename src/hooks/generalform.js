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

const useGeneralForm = () => {
  const {
    profile: { user, business },
  } = useContext(AppContext);
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
      initalValue: "",
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
      initialValue: "",
    },
    phoneNumber: {
      value: "",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Phone Number",
      label: "Phone Number",
      required: true,
      validation: phoneNumberCheck,
      blur: false,
      initialValue: "",
      info: "Number must start with a +234",
    },
  });
  const [personalFormValid, setPersonalFormValid] = useState(false);

  useEffect(() => {
    setPersonalForm((prevState) => {
      return {
        firstName: {
          ...prevState.firstName,
          value: user ? user?.firstName : "",
          initialValue: user ? user?.firstName : "",
          valid: true,
        },
        lastName: {
          ...prevState.lastName,
          value: user ? user.lastName : "",
          initialValue: user ? user?.lastName : "",
          valid: true,
        },
        phoneNumber: {
          ...prevState.phoneNumber,
          value: user ? user.phoneNumber : "",
          initialValue: user ? user?.phoneNumber : "",
          valid: true,
        },
      };
    });
    setPersonalFormValid(true);
  }, [user]);

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
      initialValue: "",
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
      initialValue: "",
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
      initialValue: "",
    },
  });

  useEffect(() => {
    setBusinessForm((prevState) => {
      return {
        businessName: {
          ...prevState.firstName,
          value: business ? business.businessName : "",
          valid: true,
          initialValue: business ? business.businessName : "",
        },
        businessEmail: {
          ...prevState.businessEmail,
          value: business ? business.businessEmail : "",
          valid: true,
          initialValue: business ? business.businessEmail : "",
        },
        businessAddress: {
          ...prevState.businessAddress,
          value: business ? business.businessAddress : "",
          valid: true,
          initialValue: business ? business.businessAddress : "",
        },
      };
    });
    setBusinessFormValid(true);
  }, [user]);

  const [businessFormValid, setBusinessFormValid] = useState(false);

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
