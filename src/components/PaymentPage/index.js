import Select from "./Select";
import Pay from "./Pay";
import Modal from "./../UI/Modal";
import Success from "./Response";
import { useState } from "react";
const PaymentProcess = ({close}) => {
  const [name, setName] = useState("");

  const change = (name) => {
    setName(name);
  };

  
  return (
    <Modal close={close}>
      <Select name={name} onclick={change} />
      {/* <Success /> */}
      {name !== "" && <Pay   goBack={() => setName("")}/>}
    </Modal>
  );
};

export default PaymentProcess;