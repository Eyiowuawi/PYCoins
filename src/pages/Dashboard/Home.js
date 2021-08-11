import { useMemo, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context";

import User from "../../components/Dashboard/User";
import RegisterBusiness from "../../components/Dashboard/RegisterBusiness";
import CryptoCurrency from "../../components/Dashboard/CrytptoCurrency";
import Table from "../../components/Table";
import BusinessForm from "../../components/Dashboard/BusinessForm";
import { RightArrow } from "../../icons";
// import Empty from "../../components/Empty"
import { transactions } from "../../constants";
import TableResponsive from "./../../components/TableResponsive";
import useWindowWidth from './../../hooks/windowwidth';

const Dashboard = () => {
  const { show, setShow } = useContext(ModalContext);
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
        <div className="home_container">
          <div className="home_container-date">
            <User date={date} />
          </div>
          <div className="home_container-reg">
            <RegisterBusiness onclick={() => setShow(true)} />
          </div>
        </div>
        <div className="home_wallets">
          <p className="title title-small">Wallet</p>
          <Link to="/wallet">
            <span className="link link-small">View All</span>
            <RightArrow fill={"#48D189"} />
          </Link>
        </div>
        <div className="home_container-crypto">
          <CryptoCurrency />
        </div>
        <div className="home_empty">
          <p className="title title-small mb-small">Recent Transactions </p>
          {/* <Empty>
          <img src={empty} alt="Empty State" />
          <h3 className="title title-black mb-small mt-small">
            Your transaction history is currently empty!
          </h3>
          <p className="title title-grey ">
            Once you start receiving payments, the transaction details will
            appear here.
          </p>
        </Empty> */}
          {width > 500 && <Table data={transactions} />}
          {width <= 500 && <TableResponsive data={transactions} />}
        </div>
      </div>
      {show && <BusinessForm />}
    </>
  );
};

export default Dashboard;
