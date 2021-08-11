import { Arrow } from "../../icons";
import Logo from "../../assets/Logo.svg";
import Hamburger from "../../assets/hamburger.svg";
import Toggle from "./Switch";
const Header = ({showsidebar}) => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_desktop">
          <p className="header-text header-text-grey">Test</p>
          <Toggle />
          <p className="header-text header-text-grey">Live</p>
          <div className="header_name">JD</div>
          <p className="header-text header-text-black">John Doe</p>
          <Arrow />
        </div>

        <div className="header_mobile">
          <img onClick={showsidebar} src={Hamburger} />
          <div className="header_logo">
            <img src={Logo} alt="Payercoins Logo" />
          </div>
          <div className="header_name_container">
            <div className="header_name">JD</div>
            <div className="header_mobile_arrow">
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
