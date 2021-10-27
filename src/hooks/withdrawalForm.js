import { useState } from "react";
import { required } from "../utils/validations";

const useWithdrawForm = ({ wallet_address }) => {
  const [withdrawForm, setWithdrawForm] = useState({
    address: {
      value: wallet_address ? wallet_address : "",
      type: "text",
      label: "Wallet Address",
      elementType: "input",
      validation: required,
      required: true,
      blur: false,
      valid: true,
    },
    amount: {
      value: "",
      type: "number",
      label: "Amount",
      elementType: "input",
      validation: required,
      required: true,
      blur: false,
      valid: false,
    },
  });

  const [formValid, setFormValid] = useState(false);
  return [withdrawForm, setWithdrawForm, formValid, setFormValid];
};

export default useWithdrawForm;
