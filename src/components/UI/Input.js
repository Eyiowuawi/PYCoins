import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const useStyles = makeStyles(() => ({
  root: {
    "&": {
      width: "100%",
      "& .MuiOutlinedInput-root": {
        fontSize: "1.1rem",
        "& fieldset": {
          borderColor: "#e5e9f2",
          borderRadius: "8px",
        },

        "&.Mui-focused fieldset": {
          borderColor: "#e5e9f2",
        },

        "&:hover fieldset": {
          borderColor: "#e5e9f2",
        },

        "&.Mui-error:hover fieldset": {
          borderColor: "#f44336",
        },
      },
      "& label": {
        fontSize: "1rem",
        fontFamily: "Mulish , sans-serif",
        color: "#30324b",
      },
      " & label.Mui-focused": {
        color: "#48d189",
        fontFamily: "Mulish , sans-serif",
      },
    },
  },
}));

const Input = ({
  value,
  type,
  elementType,
  placeholder,
  info,
  svg,
  id,
  label,
  options,
  onchange,
  required,
  blur,
  onblur,
  valid,
  showPassword,
  show,
  readonly,
  multiple,
  selectHandler,
  selected,
  closeMenu,
}) => {
  const classes = useStyles();

  let inputElement;
  switch (elementType) {
    case "input":
      inputElement = (
        <>
          <div style={{ position: "relative" }}>
            <TextField
              error={blur && !valid}
              className={classes.root}
              label={label}
              variant="outlined"
              onChange={onchange}
              required={required}
              onBlur={onblur}
              type={type}
              value={value}
              disabled={readonly}
            />
            {svg && (
              <img
                onClick={showPassword}
                src={svg}
                alt="show password"
                className="form_img"
              />
            )}
          </div>
          {info && <p className="small small-red">{info}</p>}
        </>
      );
      break;

    case "select":
      inputElement = (
        <Select
          options={options}
          isMulti={multiple}
          components={animatedComponents}
          className={`react-select-container `}
          classNamePrefix="react-select"
          placeholder={label}
          value={selected}
          onChange={selectHandler}
          onBlur={onblur}
          closeMenuOnSelect={closeMenu}
          isSearchable={false}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="form_textarea"
          placeholder={placeholder}
          value={value}
          rows="7"
          required
          onChange={onchange}
        ></textarea>
      );
      break;
    case "file":
      inputElement = (
        <>
          <div style={{ position: "relative" }}>
            <input
              id="upload"
              type="file"
              className="form_upload-input"
              onChange={onchange}
              accept=".doc,.docx,.pdf"
            />
            <label htmlFor="upload" className="form_upload-label">
              <span>{label}</span>
            </label>
            <img src={svg} alt="upload document" className="form_img" />
          </div>
          {info && <p className="small small-red">{info}</p>}
        </>
      );
      break;
    default:
      inputElement = <input />;
      break;
  }

  return <div className="form_group">{inputElement}</div>;
};

export default Input;
