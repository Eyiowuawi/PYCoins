import { useState } from "react";
import { House } from "../icons";
import Proceed from "../assets/proceed.svg";
import Ethereum from "../assets/ethereum.svg";
import Bitcoin from "../assets/bitcoin.svg";
import Tether from "../assets/tether.svg";
import Bank from "./Popup/Bank";
import CryptoForm from "./Popup/CryptoForm";
import { useLocation } from "react-router-dom";

const Accounts = ({ showForm, goBack, name, cryptos, title, header }) => {
  const { pathname } = useLocation();
  return (
    <>
      {name === "" && (
        <div className="accounts">
          <h3 className="title title-black">{header}</h3>
          <div className="accounts_container">
            <h5 className="mute">{title} </h5>
            <div className="accounts_list">
              {pathname !== "/paymentpage" && (
                <div className="accounts_item" onClick={() => showForm("bank")}>
                  <div className="accounts_img accounts_img-1">
                    <House fill="#787676" width={"14"} height="14" />
                  </div>
                  <p>Bank Account</p>
                  <img src={Proceed} alt="Continue" />
                </div>
              )}
              {cryptos.map((item) => (
                <div
                  key={item.name}
                  className="accounts_item"
                  onClick={() => showForm(item.name)}
                >
                  <div className={item.classname}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <p>{item.name} Wallet</p>
                  <img src={Proceed} alt="Continue" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accounts;
