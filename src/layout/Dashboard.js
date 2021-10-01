import Sidebar from "../components/UI/Sidebar";
import Header from "../components/UI/Header";
import { renderRoutes } from "react-router-config";
import Popup from "./../pages/Popup/index";
import { useState, useEffect, useMemo } from "react";
import MobileSidebar from "./../components/UI/Mobilesidebar";
import { autoLogout } from "./../services/auth";
import Loader from "./../components/UI/Loader";
import { useUserProfile } from "./../query/getUserProfile";
import { AppContext } from "./../context/index";
import { Switch, Route, Redirect } from "react-router-dom";
import WithLoadingComponent from "./../hoc/withLoading";
import WithErrorComponent from "./../hoc/withError";
import { matchRoutes } from "react-router-config";
import { useGetUserEnvironment } from "../query/getUserEnvironment";
import { getProcessedPayment } from "../services/paymentlink";
const DashboardLayout = ({ route, history, location, ...props }) => {
  const [showpopup, setShowPopup] = useState(false);

  const [show, setShow] = useState(false);

  const branch = matchRoutes(route.routes, location.pathname);

  if (branch.length < 1) history.push("/pageNotFound");

  useEffect(async () => {
    await autoLogout(history);
    await getProcessedPayment();
  }, []);

  const { data, isLoading } = useGetUserEnvironment();

  const results = useUserProfile();

  const isFetching = useMemo(() => {
    return results.some((result) => result.isFetching);
  }, [results]);
  const isError = useMemo(() => {
    return results.some((result) => result.isError);
  }, [results]);

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
            <Header showsidebar={() => setShow(true)} />
            <WithLoadingComponent isLoading={isFetching}>
              <WithErrorComponent isError={isError}>
                <main className="main">
                  <div className="main_container">
                    {renderRoutes(route.routes)}
                  </div>
                </main>
              </WithErrorComponent>
            </WithLoadingComponent>
          </div>
        </div>
      </div>
      {/* {showpopup && <Popup closeModal={setShowPopup} />} */}
    </>
  );
};

export default DashboardLayout;
