import { useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context";

import User from "../../components/Dashboard/User";
import RegisterBusiness from "../../components/RegisterBusiness";
import CryptoCurrency from "../../components/Dashboard/CrytptoCurrency";
import Table from "../../components/Table";
import BusinessForm from "./BusinessForm";
import { RightArrow } from "../../icons";
// import Empty from "../../components/Empty"
import { transactions } from "../../constants";

const Dashboard = () => {
  const { show, setShow } = useContext(ModalContext);

  const date = useMemo(() => {
    const todaydate = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    });

    return todaydate;
  }, []);

  return (
    <>
      <div className="home">
        <div className="home_container">
          <User date={date} />
          <RegisterBusiness onclick={() => setShow(true)} />
        </div>
        <div className="home_wallets">
          <p className="title title-small">Wallet</p>
          <Link to="/wallet">
            <span className="link link-small">View All</span>
            <RightArrow fill={"#48D189"} />
          </Link>
        </div>
        <CryptoCurrency />
        <div className="home_empty">
          <p className="title title-small mb-small">Recent Transactions </p>
          {/* <Empty>
          <h3 className="title title-black mb-small mt-small">
            Your transaction history is currently empty!
          </h3>
          <p className="title title-grey ">
            Once you start receiving payments, the transaction details will
            appear here.
          </p>
        </Empty> */}
          <Table data={transactions} />
        </div>
      </div>
      {show && <BusinessForm />}
    </>
  );
};

export default Dashboard;
