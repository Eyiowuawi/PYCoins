import { useState } from "react";
import Button from "../../components/UI/Button";

const Create = ({ history }) => {
  const [formType, setFormType] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (evt) => {
    setFormType(evt.target.value);
  };

  const handleRouteChange = () => {
    if (formType === "") {
      setMessage("Pls, select a category to begin registration");
      return;
    }
    if (formType === "business") {
      history.push("/register/business");
    } else if (formType === "personal") {
      history.push("/register/personal");
    }
  };

  return (
    <div className="auth_form">
      <div className="auth_form-container">
        <div className="create">
          <h3 className="ta mb-small title title-black">Create your Account</h3>
          <p className="ta mb-small title title-grey">
            What do you want to use Payercoins for?
          </p>
          <div className="create_form">
            {message !== "" && <p className="ta msg">{message}</p>}
            <div className="create_form-group">
              <input
                type="radio"
                id="business"
                name="registration"
                hidden
                value="business"
                onChange={handleChange}
              />
              <label htmlFor="business">
                <span></span>
                <span className="small">Registered Business/Corporates</span>
              </label>
            </div>
            <div className="create_form-group">
              <input
                type="radio"
                id="personal"
                name="registration"
                hidden
                value="personal"
                onChange={handleChange}
              />
              <label htmlFor="personal">
                <span></span>
                <span className="small">Unregistered Business/Personal</span>
              </label>
            </div>
            <Button bg={"button_primary"} onclick={handleRouteChange}>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
