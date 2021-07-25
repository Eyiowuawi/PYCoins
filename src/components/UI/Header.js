import Switch from "../../assets/Switch.png";
import { Arrow } from "../../icons";
const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <p className="header-text header-text-grey">Test</p>
        <img src={Switch} alt="toggle" />
        <p className="header-text header-text-grey">Live</p>
        <div className="header_name">JD</div>
        <p className="header-text header-text-black">John Doe</p>
        <Arrow />
      </div>
    </div>
  );
};

export default Header;
