import { useState, useContext, useEffect } from "react";
import { required, phoneNumberCheck, emailCheck } from "./../utils/validations";
import { AppContext } from "./../context/index";

const useGeneralForm = () => {
  const {
    user: { user, business },
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
      value: "",
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
  const [personalFormValid, setPersonalFormValid] = useState(false);

  useEffect(() => {
    setPersonalForm((prevState) => {
      return {
        firstName: {
          ...prevState.firstName,
          value: user ? user.firstName : "",
          valid: true,
        },
        lastName: {
          ...prevState.lastName,
          value: user ? user.lastName : "",
          valid: true,
        },
        phoneNumber: {
          ...prevState.phoneNumber,
          value: user ? user.phoneNumber : "",
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

  useEffect(() => {
    setBusinessForm((prevState) => {
      return {
        businessName: {
          ...prevState.firstName,
          value: business ? business.businessName : "",
          valid: true,
        },
        businessEmail: {
          ...prevState.businessEmail,
          value: business ? business.businessEmail : "",
          valid: true,
        },
        businessAddress: {
          ...prevState.businessAddress,
          value: business ? business.businessAddress : "",
          valid: true,
        },
      };
    });
    setBusinessFormValid(true);
  }, [user]);

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

export default useGeneralForm;
