import Sidebar from "../components/UI/Sidebar";
import Header from "../components/UI/Header";
import { renderRoutes } from "react-router-config";
import Popup from "./../pages/Popup/index";
import { useState } from "react";
import { useEffect } from "react";

const DashboardLayout = ({ route }) => {
  const [showpopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // setShow(true);
      setShowPopup(true);
    }, 5000);
  }, []);
  return (
    <>
      <div className="dashboard">
        <div className="dashboard_container">
          <Sidebar />
          <div className="dashboard_content">
            <Header />
            <main className="main">
              <div className="main_container">{renderRoutes(route.routes)}</div>
            </main>
          </div>
        </div>
      </div>
      {showpopup && <Popup closeModal={setShowPopup} />}
    </>
  );
};

export default DashboardLayout;
