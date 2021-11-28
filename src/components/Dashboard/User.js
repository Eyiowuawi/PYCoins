import { useContext } from "react";

import { AppContext } from "./../../context/index";

import verified from "../../assets/verified.svg";
import unverified from "../../assets/unverified.svg";

const User = ({ date }) => {
  const { fullname } = useContext(AppContext);
  return (
    <div className="home_name">
      <h3 className="title title-black mb-smaller">Hello, {fullname} 👋</h3>
      <p className="title title-grey mb-smaller" style={{ fontWeight: "600 " }}>
        {date}
      </p>
      <p className="title title-grey verified ">
        <span>Unverified Account</span>
        <img src={unverified} alt="Verified" />
      </p>
    </div>
  );
};
export default User;
