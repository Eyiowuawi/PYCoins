import { useState, useEffect } from "react";
import axios from "axios";
import { required, accountNumberValidator } from "./../utils/validations";
import { toast } from "react-toastify";

const useBankForm = (bank, editing) => {
  // console.log(bank && true);
  const [banks, setBanks] = useState([]);
  const [formValid, setFormValid] = useState(editing ? true : false);
  const [loading, setLoading] = useState(false);

  const [bankForm, setBankForm] = useState({
    bank_name: {
      value: editing ? bank.bankName : "",
      valid: editing ? true : false,
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
      value: editing ? bank.number : "",
      valid: editing ? true : false,
      elementType: "input",
      type: "number",
      placeholder: "Accouunt Number",
      label: "Account Number",
      validation: accountNumberValidator,
    },
    account_name: {
      value: editing ? bank.name : "",
      valid: editing ? true : false,
      elementType: "input",
      type: "text",
      placeholder: "Accouunt Name",
      label: "Account Name",
      validation: required,
      readonly: true,
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
          code: item.code,
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
  }, [banks]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const validateAccount = async () => {
      if (
        bankForm.bank_name.value &&
        bankForm.account_number.value.length === 10
      ) {
        const selected = banks.find(
          (item) => item.value === bankForm.bank_name.value
        );
        setLoading(true);
        toast.info("Fetching Account Name");
        const { data } = await axios.get(
          `https://maylancer.org/api/nuban/api.php?account_number=${bankForm.account_number.value}&bank_code=${selected.code}`
        );
        setLoading(false);
        if (data && data.account_name) {
          setBankForm((prevState) => {
            return {
              ...prevState,
              account_name: {
                ...prevState.account_name,
                value: data.account_name,
                valid: true,
              },
            };
          });
          console.log(bankForm);
          setFormValid(true);
          toast.success("Account Name Fetched");
        } else {
          toast.error("Failed to fetch Account Name");
        }
      }
    };
    validateAccount();
  }, [bankForm.bank_name.selected, bankForm.account_number.value]);

  return [bankForm, setBankForm, formValid, setFormValid];
};

export default useBankForm;
