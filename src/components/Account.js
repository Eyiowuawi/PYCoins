import { House } from "../icons";
import Proceed from "../assets/proceed.svg";

import { useLocation } from "react-router-dom";

const Accounts = ({ showForm, goBack, name, cryptos, title, header }) => {
  const { pathname } = useLocation();
  return (
    <>
      {name === "" && (
        <div className="accounts">
          <h3 className="title title-black">{header}</h3>
          <div className="accounts_container mt-small">
            <h5 className="mute">{title} </h5>
            <div className="accounts_list mt-small">
              {!pathname.includes("pay") && (
                <div
                  className="accounts_item mt-small"
                  onClick={() => showForm("bank")}
                >
                  <div className="accounts_img accounts_img-1">
                    <House fill="#787676" width={"14"} height="14" />
                  </div>
                  <p className="title title-grey">Bank Account</p>
                  <img src={Proceed} alt="Continue" />
                </div>
              )}
              {cryptos?.map((item) => (
                <div
                  key={item.name}
                  className="accounts_item mt-small"
                  onClick={() => showForm(item.slug)}
                >
                  <div className={item.classname}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className={"accounts_content"}>
                    <p className="title title-grey">{item.name} Wallet</p>
                    {pathname.includes("pay") && (
                      <p className="title title-grey ta">{item.btc} </p>
                    )}
                  </div>
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
