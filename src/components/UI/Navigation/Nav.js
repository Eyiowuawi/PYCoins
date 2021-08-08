import { useState } from "react";
import NavItem from "./NavItem";
import { NavLink, useLocation } from "react-router-dom";
import Dropdown from "../../../assets/dropdown.svg";
import { Home, Payment, Settings, Wallet } from "../../../icons";

const items = [{ id: 1, title: "Payment Page", link: "/payment/pay" }];

const Navigation = (props) => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="nav">
      <ul className="nav_items">
        <NavItem to="/" exact title="Dashboard" onclick={() => setShow(false)}>
          <Home />
        </NavItem>
        <NavItem to="/wallet" title="Wallet" onclick={() => setShow(false)}>
          <Wallet />
        </NavItem>
        <li className={"nav_item"} onClick={handleShow}>
          <div className={pathname.includes("payment") ? "nav_active" : ""}>
            <Payment />
            <span className="nav-text">Payment</span>
            <img
              src={Dropdown}
              alt="Dropdown"
              className={show ? "nav_up" : "nav_down"}
            />
          </div>
          <div className={show ? "nav_show" : ""}>
            {items.map((item) => (
              <NavLink
                key={item.id}
                activeClassName="nav_active"
                className="nav_link"
                to={`${item.link}`}
              >
                <span className="nav-text">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </li>
        <NavItem
          to="/settings?tab=general"
          title="Settings"
          onclick={() => setShow(false)}
        >
          <Settings />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navigation;
