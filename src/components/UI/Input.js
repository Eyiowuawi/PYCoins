import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() => ({
  root: {
    "&": {
      width: "100%",
      // marginTop: "1rem",

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
        // fontSize: "1.2rem",
        color: "#48d189",
        fontFamily: "Mulish , sans-serif",
      },
    },
  },
  select: {
    "&": {
      width: "100%",
      marginTop: "1rem",
      backgroundPositionX: "98% !important",
      backgroundRepeat: "no-repeat",
      backgroundPositionY: "50% !important",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='34' height='24' viewBox='0 0 34 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.7114 16.0972L8.98758 10.4488L11.3079 8.75198L16.7114 12.7036L22.115 8.75198L24.4353 10.4488L16.7114 16.0972ZM16.7114 2.40039C9.4618 2.40039 3.58398 6.69759 3.58398 12.0004C3.58398 17.302 9.4618 21.6004 16.7114 21.6004C23.9611 21.6004 29.8389 17.302 29.8389 12.0004C29.8389 6.69759 23.9611 2.40039 16.7114 2.40039Z' fill='%23C0CCDA'/%3E%3Cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='3' y='2' width='27' height='20'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.7114 16.0972L8.98758 10.4488L11.3079 8.75198L16.7114 12.7036L22.115 8.75198L24.4353 10.4488L16.7114 16.0972ZM16.7114 2.40039C9.4618 2.40039 3.58398 6.69759 3.58398 12.0004C3.58398 17.302 9.4618 21.6004 16.7114 21.6004C23.9611 21.6004 29.8389 17.302 29.8389 12.0004C29.8389 6.69759 23.9611 2.40039 16.7114 2.40039Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3C/g%3E%3C/svg%3E%0A")`,

      "& label": {
        fontSize: "1rem",
        color: "#30324b",
        fontFamily: "Mulish , sans-serif",
      },
      "& .MuiOutlinedInput-root": {
        " & fieldset": {
          borderColor: "#e5e9f2",
          borderRadius: "8px",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#e5e9f2",
          backgroundColor: "transparent",
        },

        "&:hover fieldset": {
          borderColor: "#e5e9f2",
          padding: "1rem",
        },
      },
      " & label.Mui-focused": {
        fontSize: "1.2rem",
        color: "#48d189",
        fontFamily: "Mulish , sans-serif",
      },
      "& svg": {
        display: "none",
      },
    },
  },
  menulist: {
    "&": {},
  },
  menuitem: {
    "&": {
      fontFamily: "Mulish , sans-serif",

      padding: "1rem",
      fontSize: "1.1rem",
      "&:hover": {
        backgroundColor: "#48d189",
        color: "white",
      },

      "&.Mui-selected": {
        backgroundColor: "#48d189",

        "&:hover": {
          backgroundColor: "#48d189",
          color: "white",
        },
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
              required
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
        <FormControl
          variant="outlined"
          className={classes.select}
          required={required}
          error={blur && !valid}
        >
          <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
          <Select
            className={classes.menulist}
            label={label}
            inputProps={{
              name: label,
              id: "outlined-age-native-simple",
            }}
            onChange={onchange}
            onBlur={onblur}
            value={value}
          >
            {options.map((item) => (
              <MenuItem
                key={item.id}
                value={item.value}
                className={classes.menuitem}
              >
                {item.displayValue}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
