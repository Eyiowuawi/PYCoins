import Avatar from "../../assets/avatar.svg";
import Input from "../UI/Input";
import Button from "./../UI/Button";
import useGeneralForm from "./../../hooks/generalform";
import SettingsForm from "./Form";
import { changeHandler, handleBlur } from "./../../utils/changehandler";

const General = () => {
  const [
    personalForm,
    setPersonalForm,
    businessForm,
    setBusinessForm,
    personalFormValid,
    setPersonalFormValid,
    businessFormValid,
    setBusinessFormValid,
  ] = useGeneralForm();

  const personal = [];
  for (let key in personalForm) {
    personal.push({
      id: key,
      config: personalForm[key],
    });
  }

  const personalform = personal.map(({ id, config }) => (
    <SettingsForm
      key={id}
      label={config.label}
      type={config.type}
      value={config.value}
      onchange={(evt) =>
        changeHandler(
          evt,
          id,
          personalForm,
          setPersonalForm,
          setPersonalFormValid
        )
      }
      onblur={() => handleBlur(id, personalForm, setPersonalForm)}
      valid={config.valid}
      blur={config.blur}
    />
  ));

  const business = [];
  for (let key in businessForm) {
    business.push({
      id: key,
      config: businessForm[key],
    });
  }

  const businessform = business.map(({ id, config }) => (
    <SettingsForm
      key={id}
      label={config.label}
      type={config.type}
      value={config.value}
    />
  ));

  return (
    <div className="general">
      <h3 className="title title-black">Personal Information </h3>
      <div className="mt-small mb-small">
        <p className="title title-grey">Photo</p>
        <input type="file" accepts="image/*" id="photo" hidden />
        <div className="general_pic">
          <img src={Avatar} alt="avatar" />
          <label htmlFor="photo" className="general_upload">
            Change
          </label>
        </div>
      </div>
      <form className="mt-small settingsform">
        {personalform}
        <Button bg={"button_primary"}>Save Changes</Button>
      </form>
      <h3 className="title title-black mt-small">Business Information</h3>
      <form className="mt-small settingsform">
        {businessform}
        <Button bg={"button_primary"}>Save Changes</Button>
      </form>
    </div>
  );
};

export default General;
