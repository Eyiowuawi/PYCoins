import Sidebar from "../components/UI/Sidebar";
import Header from "../components/UI/Header";
import { renderRoutes } from "react-router-config";
import Popup from "./../pages/Popup/index";
import { useState, useEffect, useContext } from "react";
import MobileSidebar from "./../components/UI/Mobilesidebar";
import { autoLogout } from "./../services/auth/index";
import Loader from "./../components/UI/Loader";
import { useUserProfile } from "./../query/getUserProfile";
import { AppContext } from "./../context/index";

const DashboardLayout = ({ route, history }) => {
  const [showpopup, setShowPopup] = useState(false);
  const [show, setShow] = useState(false);


  useEffect(() => {
    autoLogout(history);
  }, []);

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
            <main className="main">
              <div className="main_container">{renderRoutes(route.routes)}</div>
            </main>
          </div>
        </div>
      </div>
      {/* {showpopup && <Popup closeModal={setShowPopup} />} */}
    </>
  );
};

export default DashboardLayout;
