import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQueryClient } from "react-query";

import WithLoadingComponent from "./../../hoc/withLoading";
import WithErrorComponent from "./../../hoc/withError";

import CryptoCurrency from "../../components/Dashboard/CrytptoCurrency";
import Table from "../../components/Table";
import Kyc from "../../components/Dashboard/Kyc";
import TableResponsive from "./../../components/TableResponsive";
import useWindowWidth from "./../../hooks/windowWidth";
import LandingHeader from "./../../components/Dashboard/Header";
import LandingEmpty from "./../../components/Dashboard/Empty";

import { RightArrow } from "../../icons";
import { getTransactions } from "../../services/crypto";

import { useGetWallets } from "./../../query/getWallets";

import { addClassName } from "./../../utils/addClassName";
import { useGetTransactions } from "../../query/getTransactions";
import { dateFormatter } from "./../../utils/dateFormatter";
import Pagination from "./../../components/Pagination";

const tableHead = ["PAYMENT TYPE", "AMOUNT (CRYPTO)", "DATE", "STATUS"];

const Dashboard = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const [width] = useWindowWidth();
  const [currPage, setCurrPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data: walletData } = useGetWallets();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(["gettransactions", currPage], () =>
      getTransactions(1, pageSize)
    );

    setCurrPage(1);
  }, [pageSize]); // eslint-disable-line

  const {
    isLoading: isLoadingTransactions,
    data: homeData,
    isError,
  } = useGetTransactions(currPage, pageSize);

  const date = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    });
  }, []); // eslint-disable-line

  const wallets = useMemo(() => {
    const mappedWallet = walletData?.map((item) => {
      return {
        ...item,
        ...item.crypto,
      };
    });

    if (mappedWallet?.length > 0) {
      const addedWallet = addClassName(mappedWallet);

      return addedWallet.map((item) => {
        var symbol;
        if (
          item?.crypto?.symbol?.includes("USDT") ||
          item?.crypto?.symbol?.includes("UDST")
        ) {
          symbol = "USDT";
        }
        return {
          ...item,
          symbol: symbol || item.crypto.symbol,
        };
      });
    }
  }, [walletData]);

  const paginated = useMemo(() => {
    return {
      count: homeData?.count,
      page: homeData?.page + 1,
      noOfPages: homeData?.count / +homeData?.perPage,
      pageSize,
    };
  }, [homeData]);

  const formattedTransactions = useMemo(() => {
    return homeData?.transactions?.map((item) => {
      const date = dateFormatter(item.createdAt);
      return {
        ...item,
        paymentType:
          item.transferableType === "wallet" ? "Wallet" : "Payment Page",
        date,
        cryptoType: item.crypto.type.includes("USDT")
          ? item.crypto.type.split("-").splice(1, 2).join(" ")
          : item.crypto.type,
        walletType:
          item?.cryptoWalletTransaction?.length > 0 &&
          item?.cryptoWalletTransaction[0].type === "send"
            ? "Withdrawal"
            : item.cryptoWalletTransaction.length > 0 &&
              item.cryptoWalletTransaction[0].type === "deposit"
            ? "Deposit"
            : null,
        amount:
          item?.paymentPageTransaction?.length > 0
            ? item.paymentPageTransaction[0].amountInCrypto
            : item.amount,
      };
    });
  }, [homeData]);
  console.log(formattedTransactions);

  const handlePrevPage = () => {
    setCurrPage(currPage - 1);
  };
  const handleNextPage = () => {
    setCurrPage(currPage + 1);
  };

  const handlePageSize = (e) => {
    setPageSize(e.target.value);
  };

  return (
    <>
      <WithLoadingComponent isLoading={isLoadingTransactions}>
        <WithErrorComponent isError={isError}>
          <div className="home">
            <Helmet>
              <title>Home - Payercoins</title>
            </Helmet>
            <LandingHeader date={date} setShow={setShow} />
            <div className="home_wallets">
              <p className="title title-small">Wallet</p>
              <Link to="/wallet" className="home_link">
                <span className="link link-small">View All</span>
                <RightArrow fill={"#48D189"} />
              </Link>
            </div>
            <div className="home_container-crypto">
              <CryptoCurrency wallets={wallets} />
            </div>
            <div className="home_empty">
              <p className="title title-small mb-small">Recent Transactions </p>
              {formattedTransactions?.length < 1 && <LandingEmpty />}
              {formattedTransactions?.length > 0 && (
                <div className="home_table">
                  {width > 500 && (
                    <Table
                      data={formattedTransactions}
                      onclick={() => {}}
                      tableHead={tableHead}
                    />
                  )}
                  {width <= 500 && (
                    <TableResponsive
                      data={formattedTransactions}
                      onclick={() => {}}
                    />
                  )}
                  <Pagination
                    data={paginated}
                    nextPage={handleNextPage}
                    prevPage={handlePrevPage}
                    currPage={currPage}
                    handlePageSize={handlePageSize}
                  />
                </div>
              )}
            </div>
          </div>
        </WithErrorComponent>
      </WithLoadingComponent>
      {show && <Kyc close={() => setShow(false)} />}
    </>
  );
};

export default Dashboard;
