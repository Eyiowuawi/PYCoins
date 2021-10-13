import Settlement from "../Popup/Settlement";
import { useState } from "react";
import Modal from "./../UI/Modal";
import Accounts from "./../Account";
import { cryptos } from "../../constants";
import Bank from "./../Popup/Bank";
import CryptoForm from "./../Popup/CryptoForm";
const Settlements = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (name) => {
    setName(name);
  };

  return (
    <>
      <div className="settlements">
        <h3 className="title title-black">Settlement Information</h3>
        <div className="settlements_box">
          <Settlement handlechange={() => setShow(true)} />
        </div>
      </div>
      {show && (
        <Modal close={() => setShow(false)}>
          <Accounts
            showForm={handleChange}
            name={name}
            cryptos={cryptos}
            header="Settlement Account"
            title="SEECT YOUR SETTTLEMENT METHOD"
          />
          {name === "bank" && <Bank />}
          {name !== "" && name !== "bank" && <CryptoForm name={name} />}
        </Modal>
      )}
    </>
  );
};

export default Settlements;
