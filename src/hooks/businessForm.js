import { useState } from "react";

import { required, emailCheck, urlValidator } from "../utils/validations";

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
        { id: 2, label: "Agriculture" },
        { id: 3, label: "Production" },
        { id: 4, label: "Management" },
        { id: 5, label: "Services" },
        { id: 6, label: "Finance" },
      ],
      singleSelect: true,
      validation: required,
      blur: false,
      required: true,
      closeMenuOnSelect: true,
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
        { id: 2, label: "Supervisor", value: "Supervisor" },
        { id: 3, label: "Manager", value: "Manager" },
        {
          id: 4,
          label: "Chief Executive Office",
          value: "Chief Executive Office",
        },
        { id: 5, label: "Staff", value: "Staff" },
        { id: 6, label: "Others", value: "Others" },
      ],
      validation: required,
      blur: false,
      required: true,
      closeMenuOnSelect: true,
      selected: null,
      singleSelect: true,
    },

    businessURL: {
      value: "",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Website URL",
      label: "Business URL",
      blur: false,
      required: true,
      validation: urlValidator,
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
