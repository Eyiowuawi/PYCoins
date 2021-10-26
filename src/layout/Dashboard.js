import { useState, useEffect, useMemo } from "react";
import { renderRoutes, matchRoutes } from "react-router-config";

import WithLoadingComponent from "./../hoc/withLoading";
import WithErrorComponent from "./../hoc/withError";

import Popup from "./../pages/Popup/index";

import Sidebar from "../components/UI/Sidebar";
import Header from "../components/UI/Header";
import MobileSidebar from "./../components/UI/Mobilesidebar";

import { useGetSettlements } from "../query/getSettlements";
import { autoLogout } from "./../services/auth";

import { useUserProfile } from "./../query/getUserProfile";
import { useGetUserEnvironment } from "./../query/getUserEnvironment";
import { toast } from "react-toastify";

const DashboardLayout = ({ route, history, location, ...props }) => {
  const [showpopup, setShowPopup] = useState(false);

  const [show, setShow] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const branch = matchRoutes(route.routes, location.pathname);

  if (branch.length < 1) history.push("/pageNotFound");

  useGetUserEnvironment();
  useGetSettlements();

  const results = useUserProfile();

  const isFetching = useMemo(() => {
    return results.some((result) => result.isFetching);
  }, [results]);
  const isError = useMemo(() => {
    const error = results.some((result) => result.isError);
    return error;
  }, [results]);

  useEffect(() => {
    const startApp = async () => {
      await autoLogout(history);
    };

    startApp();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const show = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(show);
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_container">
          <Sidebar show={show} close={() => setShow(false)} />
          {show && <MobileSidebar close={() => setShow(false)} />}
          <div className="dashboard_content">
            <Header
              showsidebar={() => setShow(true)}
              dropdown={dropdown}
              close={() => setDropdown(!dropdown)}
            />
            <WithLoadingComponent isLoading={isFetching}>
              <WithErrorComponent isError={isError}>
                <main className="main" onClick={() => setDropdown(false)}>
                  <div className="main_container">
                    {renderRoutes(route.routes)}
                  </div>
                </main>
              </WithErrorComponent>
            </WithLoadingComponent>
          </div>
        </div>
      </div>
      {/* {showpopup && <Popup closeModal={() => setShowPopup(false)} />} */}
    </>
  );
};

export default DashboardLayout;
