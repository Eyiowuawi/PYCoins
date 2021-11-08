import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import TransactionsDetails from "./../../components/TransactionDetails";
import FundWallet from "../../components/CryptoDetails/Fund";
import WithDraw from "../../components/CryptoDetails/Withdraw";
import Back from "../../components/Back";
import Table from "./../../components/Table";
import TableResponsive from "./../../components/TableResponsive";
import Details from "../../components/CryptoDetails/Details";
import LandingEmpty from "./../../components/Dashboard/Empty";

import { cryptos } from "../../constants";
// import { useMutation } from "react-query";
import useWindowWidth from "./../../hooks/windowWidth";
import { useGetWalletTransactions } from "../../query/getWalletTransactions";
import WithLoadingComponent from "./../../hoc/withLoading";
import { useGetStaticAddress } from "./../../query/getStaticAddress";
import { transactions } from "../../constants/index";
import { formatTransactions } from "./../../utils/formatTransaction";
import { dateFormatter } from "./../../utils/dateFormatter";

const cryptoTableHead = ["TRANSACTION", "AMOUNT", "DATE", "STATUS"];
const fiatTableHead = [
  "ACCOUNT NUMBER",
  "BANK NAME",
  "AMOUNT",
  "DATE",
  "STATUS",
];

const CryptoDetails = () => {
  const [tableType, setTableType] = useState("crypto");
  const [show, setShow] = useState(false);
  const [fund, setFund] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [width, setWidth] = useWindowWidth();
  const [bank, setBank] = useState([]);

  const { search } = useLocation();
  const currency = search.substring(10);

  const crypto = cryptos.find((item) => item.slug === currency);

  const { isFetching, data: transactions } = useGetWalletTransactions(
    crypto.slug
  );

  const formattedTransactions = useMemo(() => {
    return transactions?.map((item) => {
      const date = dateFormatter(item.createdAt);
      return {
        ...item,
        date,
      };
    });
  }, [transactions]);

  console.log(crypto.slug);
  const { data: address } = useGetStaticAddress(crypto.slug);

  const updateTable = useMemo(() => {
    if (tableType === "crypto") {
      return formattedTransactions;
    } else {
      return bank;
    }
  }, [tableType, formattedTransactions, bank]);

  return (
    <>
      <div className="cryptodetails">
        <Helmet>
          <title>{currency} - Payercoins</title>
        </Helmet>
        <Back to="/wallet" title="Wallet" />
        <Details crypto={crypto} setFund={setFund} setWithdraw={setWithdraw} />
        <div className="mt-md">
          <h3 className="title title-black mb-small">Transaction </h3>

          <div className="cryptodetails_buttons">
            <button
              className={`nav-text ${
                tableType === "crypto" && "settings_active"
              }`}
              onClick={() => setTableType("crypto")}
            >
              Crypto Transaction
            </button>
            <button
              className={`nav-text ${
                tableType === "fiat" && "settings_active"
              }`}
              onClick={() => setTableType("fiat")}
            >
              Fiat Transaction
            </button>
          </div>
          <WithLoadingComponent isLoading={isFetching}>
            {updateTable?.length < 1 && <LandingEmpty />}
            {updateTable?.length > 1 && (
              <>
                {width > 500 && (
                  <Table
                    data={updateTable}
                    onclick={() => setShow(true)}
                    tableHead={
                      tableType === "crypto" ? cryptoTableHead : fiatTableHead
                    }
                    currency={currency}
                  />
                )}
                {width <= 500 && (
                  <TableResponsive
                    data={transactions}
                    onclick={() => setShow(true)}
                  />
                )}
              </>
            )}
          </WithLoadingComponent>
        </div>
      </div>

      {show && <TransactionsDetails close={() => setShow(false)} />}
      {fund && <FundWallet address={address} close={() => setFund(false)} />}
      {withdraw && (
        <WithDraw
          currency={currency}
          close={() => setWithdraw(false)}
          selectedCrypto={crypto}
        />
      )}
    </>
  );
};

export default CryptoDetails;
