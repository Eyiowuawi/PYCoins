import { Logout } from "../../icons";
import { Arrow } from "../../icons";
import Toggle from "./Switch";

import { Link } from "react-router-dom";

const Arrowdropdown = ({ checked, param, toggle, disabled }) => {
  return (
    <div className="dropdown">
      <div className="dropdown_container">
        <div className="dropdown_env">
          <p className="header-text header-text-grey">Test</p>
          <Toggle
            className="dropdown_toggle"
            checked={checked}
            param={param}
            toggle={toggle}
            disabled={disabled}
            height={25}
            width={50}
          />
          <p className="header-text header-text-grey">Live</p>
        </div>
        <Link to="/auth/create" className="sidebar_footer">
          <Logout />
          <p className="header-text header-text-grey">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Arrowdropdown;
