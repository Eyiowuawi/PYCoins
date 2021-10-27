import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { QueryClient, useMutation } from "react-query";

import WithLoadingComponent from "./../../hoc/withLoading";
import WithErrorComponent from "./../../hoc/withError";

import CryptoCurrency from "../../components/Dashboard/CrytptoCurrency";
import BusinessForm from "../../components/Dashboard/BusinessForm";
// import Table from "../../components/Table";
// import TableResponsive from "./../../components/TableResponsive";
// import useWindowWidth from "./../../hooks/windowwidth";
import LandingHeader from "./../../components/Dashboard/Header";
import LandingEmpty from "./../../components/Dashboard/Empty";

import { switchToBusiness } from "../../services/user";

import { RightArrow } from "../../icons";

import { useGetWallets } from "./../../query/getWallets";

import { addClassName } from "./../../utils/addClassName";

const Dashboard = ({ ...props }) => {
  const [show, setShow] = useState(false);
  // const [width, setWidth] = useWindowWidth();
  const { data: walletData, isLoading } = useGetWallets();

  const queryClient = new QueryClient();

  const date = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    });
  }, []);

  const wallets = useMemo(() => {
    const mappedWallet = walletData?.map((item) => {
      return {
        ...item,
        ...item.crypto,
      };
    });

    if (mappedWallet?.length > 0) {
      const addedWallet = addClassName(mappedWallet);
      return addedWallet;
    }
  }, [walletData]);

  const {
    mutate,
    data,
    isError,
    isLoading: switchLoading,
    isSuccess,
  } = useMutation(
    (param) => switchToBusiness(param),

    {
      mutationKey: "switchToBusiness",
      onSuccess: () => {
        queryClient.invalidateQueries(["getuserprofile", 1]);
      },
    }
  );

  const handleSubmit = (evt, data) => {
    evt.preventDefault();
    mutate(data);
  };

  return (
    <WithLoadingComponent isLoading={isLoading}>
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
            <LandingEmpty />
            {/* {width > 500 && <Table data={transactions} onclick={() => {}} />}
            {width <= 500 && <TableResponsive data={transactions} />} */}
          </div>
        </div>
        <>
          {show && (
            <BusinessForm
              close={() => setShow(false)}
              isLoading={switchLoading}
              data={data}
              show={show}
              submit={handleSubmit}
              success={isSuccess}
            />
          )}
        </>
      </WithErrorComponent>
    </WithLoadingComponent>
  );
};

export default Dashboard;
