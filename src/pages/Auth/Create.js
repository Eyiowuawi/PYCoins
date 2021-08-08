import { useState } from "react";
import Button from "../../components/UI/Button";
import Label from "../../components/UI/Label";

const Create = ({ history }) => {
  const [formType, setFormType] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (evt) => {
    console.log(evt.target.value)
    setFormType(evt.target.value);
  };

  const handleRouteChange = () => {
    if (formType === "") {
      setMessage("Pls, select a category to begin registration");
      return;
    }
    if (formType === "business") {
      history.push("/auth/register/business");
    } else if (formType === "personal") {
      history.push("/auth/register/personal");
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
            <Label
              id="business"
              title="Registered Businesses/Corporates "
              name={"form"}
              type="radio"
              onchange={handleChange}
              value={"business"}
            />
            <Label
              id="personal"
              onchange={handleChange}
              title="Unregistered Businesses/Personal "
              name={"form"}
              type="radio"
              value={"personal"}
            />
            <Button bg={"button_primary"} onclick={handleRouteChange}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
