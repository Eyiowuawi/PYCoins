import { useState, useMemo, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { LeftArrow } from "../../icons";
import { cryptos, transactions } from "../../constants";
import Table from "./../../components/Table";
import TransactionsDetails from "./../../components/TransactionDetails";
import FundWallet from "../../components/CryptoDetails/Fund";
import WithDraw from "../../components/CryptoDetails/Withdraw";
import Back from "../../components/Back";
import TableResponsive from "./../../components/TableResponsive";
import Details from "./../../components/CryptoDetails/details";
import LandingEmpty from "./../../components/Dashboard/Empty";
const CryptoDetails = () => {
  const [show, setShow] = useState(false);
  const [fund, setFund] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const { search } = useLocation();
  const currency = search.substring(10);

  const crypto = cryptos.find((item) => item.slug === currency);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <>
      <div className="cryptodetails">
        <Back to="/wallet" title="Wallet" />
        <Details crypto={crypto} setFund={setFund} setWithdraw={setWithdraw} />
        <div className="mt-small">
          <h3 className="title title-black mb-small">Transaction </h3>
          <LandingEmpty />
          {/* {width > 500 && (
            <Table data={transactions} onclick={() => setShow(true)} />
          )}
          {width <= 500 && (
            <TableResponsive
              data={transactions}
              onclick={() => setShow(true)}
            />
          )} */}
        </div>
      </div>

      {show && <TransactionsDetails close={() => setShow(false)} />}
      {fund && <FundWallet close={() => setFund(false)} />}
      {withdraw && (
        <WithDraw currency={currency} close={() => setWithdraw(false)} />
      )}
    </>
  );
};

export default CryptoDetails;
