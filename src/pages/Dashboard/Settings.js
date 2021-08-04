import Currency from "../../components/Settings/Currency";
import General from "../../components/Settings/General";
import SettingsNav from "../../components/Settings/NavLink";
import Webhooks from "../../components/Settings/WebHooks";
import useSettingsNav from "../../hooks/settingsNav";
import Settlement from "./../../components/Settings/Settlements";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Settings = () => {
  const { search } = useLocation();
  const [page, setPage] = useState(search.substring(5));

  useEffect(() => {
    const page = search.substring(5);
    setPage(page);
  }, [search]);

  const [settingsNav, setSettingsNav] = useSettingsNav();
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
        {page === "general" && <General />}
        {page === "settlements" && <Settlement />}
        {page === "api-keys-webhooks" && <Webhooks />}
        {page === "currency" && <Currency />}
      </div>
    </div>
  );
};

export default Settings;
