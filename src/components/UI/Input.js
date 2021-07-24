const Input = ({
  value,
  type,
  elementType,
  placeholder,
  info,
  svg,
  key,
  options,
}) => {
  let inputElement;
  switch (elementType) {
    case "input":
      inputElement = (
        <>
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            id={key}
            className="form_input"
          />
          {info && <p className="small mt-small">{info}</p>}
        </>
      );
      break;

    case "select":
      inputElement = (
        <select className="form_select">
          {options.map((item) => (
            <option key={item.id}>{item.displayValue}</option>
          ))}
        </select>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="form_textarea"
          placeholder={placeholder}
          value={value}
          rows="7"
        ></textarea>
      );
      break;

    default:
      inputElement = <input />;
      break;
  }

  return (
    <div className="form_group">
      {inputElement}
      {svg && <img src={svg} alt="show password" className="form_img" />}
    </div>
  );
};

export default Input;
