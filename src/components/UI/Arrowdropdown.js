import { Logout } from "../../icons";
import { Arrow } from "../../icons";
import Toggle from "./Switch";

import { Link } from "react-router-dom";

const Arrowdropdown = () => {
  return (
    <div className="dropdown">
      <Arrow />
      <div className="dropdown_container">
        <div className="dropdown_mobile">
          <p className="header-text header-text-grey">Test</p>
          <Toggle className="dropdown_toggle" />
          <p className="header-text header-text-grey">Live</p>
        </div>
        <div className="dropdown_logout">
          <Link to="/auth/create" className="sidebar_footer">
            <Logout />
            <p className="dropdown_logout_text">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Arrowdropdown;
