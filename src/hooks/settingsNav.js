import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

const useSettingsNav = () => {
  const { search } = useLocation();

  const [settingsNav, setSettingsNav] = useState([
    { id: 1, to: "?tab=general", name: "General", active: true },
    { id: 2, to: "?tab=settlements", name: "Settlements", active: false },
    {
      id: 3,
      to: "?tab=api-keys-webhooks",
      name: "API Keys & Webhooks",
      active: false,
    },
    { id: 4, to: "?tab=currency", name: "Currency", active: false },
  ]);

  useEffect(() => {
    setSettingsNav(
      settingsNav.map((item) => {
        if (item.to === search) item.active = true;
        else item.active = false;
        return item;
      })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [settingsNav, setSettingsNav];
};

export default useSettingsNav;
