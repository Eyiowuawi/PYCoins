import { useState } from "react";
import { required, emailCheck } from "../utils/validations";
import upload from "../assets/upload.svg";

const useBusinessForm = () => {
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
    businessIndustry: {
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
    businessRole: {
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

    businessURL: {
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
    description: {
      value: "",
      valid: false,
      type: "url",
      elementType: "textarea",
      placeholder: "Tell us a bit about your business",
      blur: false,
      required: true,
      validation: required,
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
    businessDocument: {
      value: null,
      elementType: "file",
      valid: false,
      image: upload,
      label: "Upload Business Incorporation Document",
      info: "accepts only .doc, .docx or .pdf  files",
    },
  });

  const [formValid, setFormValid] = useState(false);

  return [businessForm, setBusinessForm, formValid, setFormValid];
};

export default useBusinessForm;
