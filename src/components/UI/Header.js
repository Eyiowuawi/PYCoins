import { Arrow } from "../../icons";
import Logo from "../../assets/Logo.svg";
import Hamburger from "../../assets/hamburger.svg";
import Toggle from "./Switch";
import Arrowdropdown from "./Arrowdropdown";
import { useContext, useMemo, useEffect } from "react";
import { AppContext } from "./../../context/index";
const Header = ({ showsidebar }) => {
  const { fullname, initials } = useContext(AppContext);
  // console.log
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_desktop">
          <p className="header-text header-text-grey">Test</p>
          <Toggle />
          <p className="header-text header-text-grey">Live</p>
          {fullname && (
            <>
              <div className="header_name">{`${initials}`}</div>
              <p className="header-text header-text-black">{`${fullname}`}</p>
            </>
          )}

          <Arrowdropdown />
        </div>

        <div className="header_mobile">
          <img onClick={showsidebar} src={Hamburger} />
          <div className="header_logo">
            <img src={Logo} alt="Payercoins Logo" />
          </div>
          <div className="header_name_container">
            <div className="header_name">JD</div>
            <div className="header_mobile_arrow">
              <Arrowdropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
