import { useState } from "react";
import PersonalInfo from "../../components/Auth/Personal";
import VerifyMsg from "./Verify";
import usePersonalForm from "../../hooks/personalform";
import withRegistrationType from "../../hoc/registerType";

const PersonalForm = ({ history }) => {
  const [form] = usePersonalForm();
  const [indicate, setIndicate] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIndicate(true);
  };

  return (
    <div className="personal">
      <div className="indicator " style={{ width: "50%" }}>
        <div className="indicator_item">
          <span className="indicator_item-circle">
            <span></span>
          </span>
          <span className="indicator_item-line">
            <span
              style={
                indicate ? { backgroundColor: "#48D189", width: "100%" } : {}
              }
            ></span>
          </span>
        </div>

        <span className="indicator_item-circle">
          <span style={indicate ? { backgroundColor: "#48D189" } : {}}></span>
        </span>
      </div>
      <div className="auth_form">
        <div className="auth_form-container">
          {indicate ? (
            <VerifyMsg />
          ) : (
            <PersonalInfo personalform={form} formSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default withRegistrationType(PersonalForm);
