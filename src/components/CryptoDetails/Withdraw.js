import { useState } from "react";

import Accounts from "../Account";
import Confirmation from "./Confirmation";

import WithdrawForm from "./WithdrawForm";
import Modal from "../UI/Modal";
import Response from "../UI/Response";

import Success from "../../assets/success.svg";

import { cryptos } from "../../constants";

const WithDraw = ({ currency, close, show }) => {
  const [name, setName] = useState("");
  const handleChange = (name) => {
    setName(name);
  };

  const withdraw = (evt) => {
    evt.preventDefault();
    setName("withdraw");
  };
  const handleSuccess = (evt) => {
    evt.preventDefault();
    setName("success");
  };

  const crypto = cryptos.filter((item) => item.name === currency);

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
