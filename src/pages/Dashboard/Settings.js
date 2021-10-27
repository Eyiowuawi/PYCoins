import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useMemo } from "react";

import Currency from "../../components/Settings/Currency";
import General from "../../components/Settings/General";
import SettingsNav from "../../components/Settings/NavLink";
import Webhooks from "../../components/Settings/WebHooks";
import Settlement from "./../../components/Settings/Settlements";

import useSettingsNav from "../../hooks/settingsNav";

import { AppContext } from "./../../context/index";

const navs = ["general", "currency", "settlements", "api-keys-webhooks"];

const Settings = ({ isLoading, history }) => {
  const { search } = useLocation();

  const [settingsNav, setSettingsNav] = useSettingsNav();

  const {
    profile: { user },
  } = useContext(AppContext);

  const page = useMemo(() => {
    let page = search.substring(5);
    if (!navs.includes(page)) {
      history.push({ pathname: "settings", search: "?tab=general" });
      // setSettingsNav()
    }
    return page;
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {

  //   if(!navs.includes(search))
  // }, [search])

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
