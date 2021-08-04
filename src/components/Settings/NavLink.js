import { NavLink } from "react-router-dom";

const SettingsNav = ({ search, name, handlechange, active }) => {
  return (
    <li className="settings_li">
      <NavLink
        to={{
          pathname: "/settings",
          search: `${search}`,
        }}
        className={["nav-text", active && "settings_active"].join(" ")}
        exact
        onClick={handlechange}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default SettingsNav;
