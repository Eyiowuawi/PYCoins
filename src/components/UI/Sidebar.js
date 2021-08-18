import Logo from "../../assets/Logo.svg";
import Navigation from "./Navigation/Nav";

import { Logout } from "../../icons";
import { Link } from "react-router-dom";

const Sidebar = ({show, close}) => {
  return (
    <div className={`sidebar ${show && "sidebar_show"}`}>
      <div className="sidebar_container">
        <Link to="/">
          <img src={Logo} alt="Payercoins Logo" />
        </Link>
        <div className="sidebar_name">
          <h5>Business Name</h5>
          <p>ID: 10123856</p>
        </div>
        <Navigation close={close} />
        <Link to="/auth/create" className="sidebar_footer">
          <Logout />
          <p className="nav-text">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
