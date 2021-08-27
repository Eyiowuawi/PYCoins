const SettingsForm = ({
  label,
  type,
  value,
  onchange,
  onblur,
  valid,
  blur,
}) => (
  <div className="settingsform-group">
    <label className="title title-grey" htmlFor={label}>
      {label}
    </label>
    <input
      className="form_input"
      id={label}
      type={type}
      value={value}
      onChange={onchange}
      onBlur={onblur}
      valid={valid}
    />
  </div>
);

export default SettingsForm;
