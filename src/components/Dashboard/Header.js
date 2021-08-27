import User from "./User";
import RegisterBusiness from "./../RegisterBusiness";
import { AppContext } from "./../../context/index";
import { useContext } from "react";
const LandingHeader = ({ date, setShow }) => {
  const {
    user: { userType },
  } = useContext(AppContext);
  return (
    <div className="home_container">
      <div className="home_container-date">
        <User date={date} />
      </div>
      {userType === "individual" && (
        <div className="home_container-reg">
          <RegisterBusiness onclick={() => setShow(true)} />
        </div>
      )}
    </div>
  );
};

export default LandingHeader;
