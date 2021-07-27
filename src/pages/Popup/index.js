import { useState } from "react";

import Modal from "./../../components/UI/Modal";
import Account from "../../components/Account";
import Settlement from "../../components/Settlement";


const Popup = ({closeModal}) => {
  const [account, setAccount] = useState("");

  const handleChange = (evt) => {
    evt.preventDefault();

    setAccount("account");
  };

  return (
    <Modal close={closeModal}>
      {account === "" && <Settlement handlechange={handleChange} />}
      {account === "account" && <Account />}
    </Modal>
  );
};

export default Popup;
