import { useState } from "react";
import { House } from "../icons";
import Proceed from "../assets/proceed.svg";
import Ethereum from "../assets/ethereum.svg";
import Bitcoin from "../assets/bitcoin.svg";
import Tether from "../assets/tether.svg";
import Bank from "./Bank";
import CryptoForm from "./CryptoForm";

const Accounts = () => {
  const [name, setName] = useState("");

  const handleBack = () => {
    setName("");
  };

  return (
    <>
      {name === "" && (
        <div className="accounts">
          <h3 className="title title-black">Settlement Accounts</h3>
          <div className="accounts_container">
            <h5 className="mute">SELECT YOUR SETTLEMENT METHOD </h5>
            <div className="accounts_list">
              <div className="accounts_item" onClick={() => setName("bank")}>
                <div className="accounts_img accounts_img-1">
                  <House fill="#787676" width={"14"} height="14" />
                </div>
                <p>Bank Account</p>
                <img src={Proceed} alt="Continue" />
              </div>
              <div className="accounts_item" onClick={() => setName("Bitcoin")}>
                <div className="accounts_img accounts_img-2">
                  <img src={Bitcoin} alt="Bitcoin" />
                </div>
                <p>Bitcoin Wallet</p>
                <img src={Proceed} alt="Continue" />
              </div>
              <div
                className="accounts_item"
                onClick={() => setName("Ethereum")}
              >
                <div className="accounts_img accounts_img-3">
                  <img src={Ethereum} alt="Ethereum" />
                </div>
                <p>Ethereum Wallet </p>
                <img src={Proceed} alt="Continue" />
              </div>
              <div className="accounts_item" onClick={() => setName("Tether")}>
                <div className="accounts_img accounts_img-4">
                  <img src={Tether} alt="Tether" />
                </div>
                <p>Tether Wallet</p>
                <img src={Proceed} alt="Continue" />
              </div>
            </div>
          </div>
        </div>
      )}
      {name === "bank" && <Bank goBack={handleBack} />}
      {name !== "" && name !== "bank" && <CryptoForm name={name} goBack={handleBack}/>}
    </>
  );
};

export default Accounts;
