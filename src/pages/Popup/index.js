import { useState } from "react";

import Modal from "./../../components/UI/Modal";
import Account from "../../components/Account";
import Settlement from "../../components/Settlement";
import Bank from "../../components/Bank";
import CryptoForm from "../../components/CryptoForm";

const Popup = ({ closeModal }) => {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");

  const handleBack = () => {
    setName("");
  };

  const showForm = (name) => {
    setName(name);
  };
  const handleChange = (evt) => {
    evt.preventDefault();

    setAccount("account");
  };

  return (
    <Modal close={closeModal}>
      {account === "" && <Settlement handlechange={handleChange} />}
      {account === "account" && (
        <Account name={name}  showForm={showForm} goBack={handleBack} />
      )}
      {name === "bank" && <Bank goBack={handleBack} />}
      {name !== "" && name !== "bank" && (
        <CryptoForm name={name} goBack={handleBack} />
      )}
    </Modal>
  );
};

export default Popup;
