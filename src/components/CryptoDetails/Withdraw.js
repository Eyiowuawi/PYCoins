import { useState } from "react";

import Accounts from "../Account";
import Confirmation from "./Confirmation";

import WithdrawForm from "./WithdrawForm";
import Modal from "../UI/Modal";
import Response from "../UI/Response";

import Success from "../../assets/success.svg";

import { cryptos } from "../../constants";
import useWithdrawForm from "./../../hooks/withdrawalForm";
import { useMutation } from "react-query";
import { requestWithdrawal } from "../../services/crypto";

const WithDraw = ({ currency, close, show, selectedCrypto }) => {
  const crypto = cryptos.filter((item) => item.slug === currency);

  const [withdrawForm, setWithdrawForm, formValid, setFormValid] =
    useWithdrawForm();

  const [name, setName] = useState("");

  const { data, mutate } = useMutation((data) => requestWithdrawal(data), {
    onSuccess: () => setName("success"),
  });

  const handleChange = (name) => {
    setName(name);
  };

  const withdraw = (evt) => {
    evt.preventDefault();

    const data = {};

    for (const key in withdrawForm) data[key] = withdrawForm[key].value;
    data["wallet"] = selectedCrypto.slug;
    console.log(data);

    mutate(data);
    setName("success");
  };
  const handleSuccess = (evt) => {
    evt.preventDefault();
    setName("success");
  };

  console.log(selectedCrypto);

  let renderElement;
  switch (name) {
    case "":
      renderElement = (
        <>
          <Accounts
            header="Settlement Account"
            title="SELECT YOUR SETTLEMENT METHOD "
            cryptos={crypto}
            name={name}
            showForm={handleChange}
          />
        </>
      );
      break;
    case "bank":
      renderElement = (
        <>
          <WithdrawForm
            goBack={() => setName("")}
            name=""
            withdraw={withdraw}
          />
        </>
      );
      break;
    case currency:
      renderElement = (
        <>
          <WithdrawForm
            goBack={() => setName("")}
            name=""
            withdraw={withdraw}
            withdrawForm={withdrawForm}
            setForm={setWithdrawForm}
            validForm={formValid}
            setValidForm={setFormValid}
            crypto={selectedCrypto}
          />
        </>
      );
      break;
    case "withdraw":
      renderElement = (
        <>
          <Confirmation
            goBack={() => setName("bank")}
            success={handleSuccess}
          />
        </>
      );
      break;
    case "success":
      renderElement = (
        <>
          <Response
            img={Success}
            title="Withdrawal Successful"
            text=" Your withdrawal of NGN 100,000 was successful."
          />
        </>
      );
      break;
    default:
      return null;
  }

  return (
    <Modal show={show} close={close}>
      {renderElement}
    </Modal>
  );
};

export default WithDraw;
