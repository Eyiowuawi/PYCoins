import { useMemo, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import User from "../../components/Dashboard/User";
import RegisterBusiness from "../../components/Dashboard/RegisterBusiness";
import CryptoCurrency from "../../components/Dashboard/CrytptoCurrency";
import Table from "../../components/Table";
import BusinessForm from "../../components/Dashboard/BusinessForm";
import { RightArrow } from "../../icons";
// import Empty from "../../components/Empty"
import { transactions } from "../../constants";
import TableResponsive from "./../../components/TableResponsive";
import useWindowWidth from "./../../hooks/windowwidth";
import { useUserProfile } from "./../../query/getUserProfile";
import { AppContext } from "./../../context/index";
import WithLoadingComponent from "./../../hoc/withLoading";
import LandingHeader from "./../../components/Dashboard/Header";
import LandingEmpty from "./../../components/Dashboard/Empty";
import Error from "./../../components/Error";

const Dashboard = ({ isLoading, ...props }) => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useWindowWidth();

  const date = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    });
  }, []);

  return (
    <>
      <div className="home">
        <LandingHeader date={date} setShow={setShow} />
        <div className="home_wallets">
          <p className="title title-small">Wallet</p>
          <Link to="/wallet" className="home_link">
            <span className="link link-small">View All</span>
            <RightArrow fill={"#48D189"} />
          </Link>
        </div>
        <div className="home_container-crypto">
          <CryptoCurrency />
        </div>
        <div className="home_empty">
          <p className="title title-small mb-small">Recent Transactions </p>
          {/* <LandingEmpty /> */}
          {width > 500 && <Table data={transactions} />}
          {width <= 500 && <TableResponsive data={transactions} />}
        </div>
      </div>
      {show && <BusinessForm close={setShow} />}
    </>
  );
};

export default Dashboard;
