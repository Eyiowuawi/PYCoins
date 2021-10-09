import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect, useContext } from "react";

import Currency from "../../components/Settings/Currency";
import General from "../../components/Settings/General";
import SettingsNav from "../../components/Settings/NavLink";
import Webhooks from "../../components/Settings/WebHooks";
import Settlement from "./../../components/Settings/Settlements";

import useSettingsNav from "../../hooks/settingsNav";

import { AppContext } from "./../../context/index";

const Settings = ({ isLoading }) => {
  const [page, setPage] = useState(search.substring(5));

  const { search } = useLocation();

  const [settingsNav, setSettingsNav] = useSettingsNav();

  const {
    profile: { user },
  } = useContext(AppContext);

  useEffect(() => {
    const page = search.substring(5);
    setPage(page);
  }, [search]);

  const handleChange = (id) => {
    setSettingsNav(
      settingsNav.map((item) => {
        if (item.id === id) item.active = true;
        else item.active = false;
        return item;
      })
    );
  };

  return (
    <div className="settings">
      <Helmet>
        <title>Settings - Payercoins</title>
      </Helmet>
      <h3 className="title title-black mb-small">Settings</h3>
      <nav className="settings_nav mt-small">
        <ul className="settings_ul">
          {settingsNav.map((item) => (
            <SettingsNav
              search={item.to}
              name={item.name}
              key={item.id}
              handlechange={() => handleChange(item.id)}
              active={item.active}
            />
          ))}
        </ul>
      </nav>
      <div className="settings_pages">
        {page === "general" && <General profileimg={user?.profileImage} />}
        {page === "settlements" && <Settlement />}
        {page === "api-keys-webhooks" && <Webhooks />}
        {page === "currency" && <Currency />}
      </div>
    </div>
  );
};

export default Settings;
