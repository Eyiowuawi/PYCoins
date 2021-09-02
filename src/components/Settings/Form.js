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
}) => {
  // console.log(value);

  return (
    <div className="settingsform-group">
      <label className="title title-grey" htmlFor={label}>
        {label}
      </label>
      <div className="settingsform-input">
        <input
          className={`form_input ${blur && !valid && "form_error"}`}
          id={label}
          type={type}
          value={value}
          onChange={onchange}
          onBlur={onblur}
          // valid={valid}
        />
        {image && <img onClick={showPassword} src={image} alt="show" />}
        {info && <p className="small small-red">{info}</p>}
      </div>
    </div>
  );
};

export default SettingsForm;
