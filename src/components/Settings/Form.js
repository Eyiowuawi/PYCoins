import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
const SettingsForm = ({
  label,
  type,
  value,
  onchange,
  onblur,
  valid,
  blur,
  info,
  image,
  showPassword,
  elementType,
}) => {
  // console.lgo;
  let inputElement;

  switch (elementType) {
    case "input":
      inputElement = (
        <>
          <div className="settingsform-input">
            <div style={{ position: "relative" }}>
              <input
                className={`form_input ${blur && !valid && "form_error"}`}
                id={label}
                type={type}
                value={value}
                onChange={onchange}
                onBlur={onblur}
                style={{ textTransform: "capitalize" }}
                // valid={valid}
              />
              {image && (
                <img
                  onClick={showPassword}
                  src={image}
                  alt="show"
                  className="form_img"
                />
              )}
            </div>
            {info && <p className="small small-red">{info}</p>}
          </div>
        </>
      );
      break;
    case "phone":
      inputElement = (
        <div className="settingsform-input">
          <PhoneInput
            containerClass="container-phone"
            inputClass={`input-phone ${blur && !valid && "error-phone"}`}
            buttonClass="button-phone"
            country={"us"}
            value={value}
            dropdownClass="dropdown-phone"
            onChange={onchange}
            onBlur={onblur}
          />
        </div>
      );
      break;
    default:
      inputElement = null;
  }
  return (
    <div className="settingsform-group">
      <label className="title title-grey" htmlFor={label}>
        {label}
      </label>
      {inputElement}
    </div>
  );
};

export default SettingsForm;
