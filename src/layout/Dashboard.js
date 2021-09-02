import Sidebar from "../components/UI/Sidebar";
import Header from "../components/UI/Header";
import { renderRoutes } from "react-router-config";
import Popup from "./../pages/Popup/index";
import { useState, useEffect, useContext } from "react";
import MobileSidebar from "./../components/UI/Mobilesidebar";
import { autoLogout } from "./../services/auth";
import Loader from "./../components/UI/Loader";
import { useUserProfile } from "./../query/getUserProfile";
import { AppContext } from "./../context/index";
import { Switch, Route, Redirect } from "react-router-dom";
import WithLoadingComponent from "./../hoc/withLoading";
import WithErrorComponent from "./../hoc/withError";

const DashboardLayout = ({ route, history, ...props }) => {
  const [showpopup, setShowPopup] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(async () => {
    await autoLogout(history);
  }, []);

  const { data, isLoading, isSuccess, isError } = useUserProfile();
  const { saveUser, user } = useContext(AppContext);
  // console.log(user);
  useEffect(() => {
    if (isSuccess && data && data.data) saveUser(data.data);
  }, [data, isSuccess]);

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
            <WithLoadingComponent isLoading={isLoading}>
              <WithErrorComponent isError={isError}>
                <main className="main">
                  <div className="main_container">
                    {renderRoutes(route.routes, { isLoading: isLoading })}
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
