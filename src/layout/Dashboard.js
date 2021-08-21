import Sidebar from "../components/UI/Sidebar";
import Header from "../components/UI/Header";
import { renderRoutes } from "react-router-config";
import Popup from "./../pages/Popup/index";
import { useState } from "react";
import { useEffect } from "react";
import MobileSidebar from "./../components/UI/Mobilesidebar";

const DashboardLayout = ({ route }) => {
  const [showpopup, setShowPopup] = useState(false);
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 5000);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width > 800) setShow(false);
  }, [width]);
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
