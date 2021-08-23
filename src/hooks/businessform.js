import { useState } from "react";
import { required, emailCheck } from "../utils/validations";
import upload from "../assets/upload.svg";

const useBusinessForm = () => {
  const [businessForm, setBusinessForm] = useState({
    name: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      label: "Business Name",
      required: true,
      validation: required,
      blur: false,
    },
    country: {
      value: "",
      valid: false,
      elementType: "select",
      label: "Country of Incorporation",
      options: [
        { id: 1, displayValue: "Role at Business", value: "" },
        { id: 2, displayValue: "Nigeria", value: "Nigeria" },
        { id: 3, displayValue: "Togo", value: "Togo" },
        { id: 4, displayValue: "Finland", value: "Finland" },
        { id: 5, displayValue: "Somalia", value: "Somalia" },
        { id: 6, displayValue: "Afghanistan", value: "Afghanistan" },
      ],
      validation: required,
      blur: false,
      required: true,
    },
    industry: {
      value: "",
      valid: false,
      label: "Industry of Business",
      elementType: "select",
      options: [
        { id: 1, displayValue: "Role at Business", value: "" },
        { id: 2, displayValue: "Nigeria", value: "Nigeria" },
        { id: 3, displayValue: "Togo", value: "Togo" },
        { id: 4, displayValue: "Finland", value: "Finland" },
        { id: 5, displayValue: "Somalia", value: "Somalia" },
        { id: 6, displayValue: "Afghanistan", value: "Afghanistan" },
      ],
      validation: required,
      blur: false,
      required: true,
    },
    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      // placeholder: "Business Email",
      label: "Business Email",
      validation: emailCheck,
      blur: false,
    },
    role: {
      value: "",
      valid: false,
      elementType: "select",
      label: "Role at Business",
      options: [
        { id: 1, displayValue: "Role at Business", value: "" },
        { id: 2, displayValue: "Nigeria", value: "Nigeria" },
        { id: 3, displayValue: "Togo", value: "Togo" },
        { id: 4, displayValue: "Finland", value: "Finland" },
        { id: 5, displayValue: "Somalia", value: "Somalia" },
        { id: 6, displayValue: "Afghanistan", value: "Afghanistan" },
      ],
      validation: required,
      blur: false,
      required: true,
    },

    url: {
      value: "",
      valid: false,
      type: "url",
      elementType: "input",
      placeholder: "Website URL",
      label: "Business URL",
      blur: false,
      required: true,
      validation: required,
    },
    desc: {
      value: "",
      valid: false,
      type: "url",
      elementType: "textarea",
      placeholder: "Tell us a bit about your business",
      blur: false,
      required: true,
      validation: required,
    },
    address: {
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
    file: {
      value: null,
      elementType: "file",
      valid: false,
      image: upload,
      label: "Upload Business Incorporation Document",
      info: "accepts only .doc, .docx or .pdf  files"
    },
  });

  const [formValid, setFormValid] = useState(false);

  return [businessForm, setBusinessForm, formValid, setFormValid];
};

export default useBusinessForm;
