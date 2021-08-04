import { useState } from "react";
import Accounts from "../Account";
import Response from "../UI/Response";
import Modal from "../UI/Modal";
import WithdrawForm from "./WithdrawForm";
import Confirmation from "./Confirmation";
import Success from "../../assets/success.svg";
import { cryptos } from "../../constants";

const WithDraw = ({ currency, close }) => {
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
          <Accounts cryptos={crypto} name={name} showForm={handleChange} />
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
  }

  return <Modal close={close}>{renderElement}</Modal>;
};

export default WithDraw;
