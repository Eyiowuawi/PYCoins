import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { LeftArrow, RightArrow } from "../../icons";
import { cryptos, transactions } from "../../constants";
import Button from "../../components/UI/Button";
import Plus from "../../assets/plus.svg";
import Table from "./../../components/Table";
import TransactionsDetails from "./../../components/TransactionDetails";
import FundWallet from "../../components/Fund";
import Settlement from "../../components/Settlement";
import Accounts from "../../components/Account";
import Modal from "../../components/UI/Modal";
import WithdrawForm from "../../components/WithdrawForm";

const CryptoDetails = () => {
  const [show, setShow] = useState(false);
  const [fund, setFund] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [name, setName] = useState("");
  const { search } = useLocation();
  const currency = search.substring(10);

  const handleChange = (name) => {
    setName(name);
  };

  const { img } = cryptos.find((item) => item.name === currency);

  const classname =
    currency === "Bitcoin"
      ? "crypto_img-1"
      : currency === "Ethereum"
      ? "crypto_img-2"
      : "crypto_img-3";

  return (
    <>
      <div className="cryptodetails">
        <Link to="/wallet" className="cryptodetails_link">
          <div>
            <LeftArrow fill={"#333333"} />
          </div>
          <p className="title title-black">Wallet</p>
        </Link>
        <div className="cryptodetails_name">
          <div className={["crypto_img", classname].join(" ")}>
            <img src={img} alt={currency} />
          </div>
          <p className="title title-grey">{currency}</p>
        </div>
        <p className="title title-grey mt-small">TOTAL BALANCE</p>
        <p className="title title-grey mt-small">0.00 BTC</p>
        <div className="cryptodetails_btns">
          <Button bg={"button_primary"} onclick={() => setFund(true)}>
            <img src={Plus} alt="Add" className="" />
            <span>Fund</span>
          </Button>
          <Button bg={"button_white"} onclick={() => setWithdraw(true)}>
            <RightArrow fill="#48d189" />
            <span> Withdraw</span>
          </Button>
        </div>
        <div className="mt-small">
          <h3 className="title title-black mb-small">Transaction </h3>
          <Table data={transactions} onclick={() => setShow(true)} />
        </div>
      </div>
      {show && <TransactionsDetails close={setShow} />}
      {fund && <FundWallet close={setFund} />}
      {withdraw && (
        <Modal>
          <Accounts name={name} showForm={handleChange} />
          {name !== "" && <WithdrawForm name="" />}
        </Modal>
      )}
    </>
  );
};

export default CryptoDetails;
