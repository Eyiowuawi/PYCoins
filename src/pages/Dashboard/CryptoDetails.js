import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import TransactionsDetails from "./../../components/TransactionDetails";
import FundWallet from "../../components/CryptoDetails/Fund";
import WithDraw from "../../components/CryptoDetails/Withdraw";
import Back from "../../components/Back";
// import Table from "./../../components/Table";
// import TableResponsive from "./../../components/TableResponsive";
import Details from "../../components/CryptoDetails/Details";
import LandingEmpty from "./../../components/Dashboard/Empty";

import { cryptos } from "../../constants";
// import { useMutation } from "react-query";
// import useWindowWidth from "./../../hooks/windowWidth";
import { useGetWalletTransactions } from "../../query/getWalletTransactions";
import WithLoadingComponent from "./../../hoc/withLoading";
import { useGetStaticAddress } from "./../../query/getStaticAddress";

const CryptoDetails = () => {
  const [show, setShow] = useState(false);
  const [fund, setFund] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  // const [width, setWidth] = useWindowWidth();

  const { search } = useLocation();
  const currency = search.substring(10);

  const crypto = cryptos.find((item) => item.slug === currency);

  const { isLoading, data } = useGetWalletTransactions(crypto.slug);

  const { data: address } = useGetStaticAddress(crypto.slug);

  return (
    <WithLoadingComponent isLoading={isLoading}>
      <div className="cryptodetails">
        <Helmet>
          <title>{currency} - Payercoins</title>
        </Helmet>
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
      {fund && <FundWallet address={address} close={() => setFund(false)} />}
      {withdraw && (
        <WithDraw
          currency={currency}
          close={() => setWithdraw(false)}
          selectedCrypto={crypto}
        />
      )}
    </WithLoadingComponent>
  );
};

export default CryptoDetails;
