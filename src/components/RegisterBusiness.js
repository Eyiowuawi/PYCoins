import UserSwitch from "../assets/user-switch.svg";
import { RightArrow } from "../icons";

const RegisterBusiness = ({ date, onclick }) => {
  return (
    <div className="home_switch" onClick={onclick}>
      <img src={UserSwitch} alt="user switch" />
      <div>
        <p className="title title-small">Verify your Identity</p>
        <p className="title title-grey" style={{ fontSize: "14px" }}>
          Get Started <RightArrow fill="#787676" />{" "}
        </p>
      </div>
    </div>
  );
};
export default RegisterBusiness;
