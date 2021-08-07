import Switch from "../../assets/Switch.png";
import { Arrow } from "../../icons";
import Hamburger from "../../assets/hamburger.svg";
import Toggle from "./Switch";
const Header = () => {
  return (
    <div className="header">
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
          <img src={Hamburger} />
          <div className="header_name">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
