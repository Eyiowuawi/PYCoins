import { useState, useEffect } from "react";
import axios from "axios";
import { required } from "./../utils/validations";

const useBankForm = (bank) => {
  const [banks, setBanks] = useState([]);
  const [bankForm, setBankForm] = useState({
    bank_name: {
      value: bank ? bank.bankName : "",
      valid: bank ? true : false,
      elementType: "select",
      label: "Select Bank",
      loading: true,
      options: [],
      closeMenuOnSelect: false,
      selected: [],
      singleSelect: true,
      validation: required,
    },
    account_number: {
      value: bank ? bank.number : "",
      valid: bank ? true : false,
      elementType: "input",
      type: "number",
      placeholder: "Accouunt Number",
      label: "Account Number",
      validation: required,
    },
    account_name: {
      value: bank ? bank.name : "",
      valid: bank ? true : false,
      elementType: "input",
      type: "text",
      placeholder: "Accouunt Name",
      label: "Account Name",
      validation: required,
    },
  });
  useEffect(() => {
    const fetchBanks = async () => {
      const { data } = await axios.get("https://api.paystack.co/bank");
      const formatted = data.data.map((item) => {
        return {
          label: item.name,
          value: item.name,
          id: item.id,
        };
      });
      setBanks(formatted);
    };

    fetchBanks();
  }, []);

  useEffect(() => {
    setBankForm((prevState) => {
      return {
        ...prevState,
        bank_name: {
          ...prevState.bank_name,
          options: banks,
          loading: banks.length > 0 ? false : true,
          selected: bank
            ? banks.filter((item) => item.label === bank.bankName)
            : [],
        },
      };
    });
  }, [banks]);

  const [formValid, setFormValid] = useState(bank ? true : false);
  return [bankForm, setBankForm, formValid, setFormValid];
};

export default useBankForm;
