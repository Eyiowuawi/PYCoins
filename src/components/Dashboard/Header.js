import { useContext } from "react";

import User from "./User";

import RegisterBusiness from "./../RegisterBusiness";

import { AppContext } from "./../../context/index";

const LandingHeader = ({ date, setShow }) => {
  const {
    profile: { user },
  } = useContext(AppContext);
  return (
    <div className="home_container">
      <div className="home_container-date">
        <User date={date} />
      </div>

      <div className="home_container-reg">
        <RegisterBusiness />
      </div>
    </div>
  );
};

export default LandingHeader;
