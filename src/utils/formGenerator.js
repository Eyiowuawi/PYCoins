import Input from "../components/UI/Input";
import {
  changeHandler,
  handleBlur,
  showPassword,
  selectHandler,
} from "./changeHandler";

const formGenerator = (formType, formFunc, validForm) => {
  const formArr = [];
  for (let key in formType) {
    formArr.push({
      id: key,
      config: formType[key],
    });
  }

  const form = formArr.map(({ id, config }) => (
    <Input
      key={id}
      id={id}
      value={config.value}
      valid={config.valid}
      type={config.type}
      elementType={config.elementType}
      placeholder={config.placeholder}
      info={config.info}
      svg={config.image}
      options={config.options}
      label={config.label}
      onchange={(event) =>
        changeHandler(event, id, formType, formFunc, validForm)
      }
      onblur={(event) => handleBlur(id, formType, formFunc)}
      selectHandler={(option) =>
        selectHandler(option, id, formType, formFunc, validForm)
      }
      required={config.required}
      blur={config.blur}
      showPassword={(evt) => showPassword(evt, id, formType, formFunc)}
      show={config.show}
      multiple={config.multiple}
      readonly={config.readonly}
      selected={config.selected}
      closeMenu={config.closeMenuOnSelect}
    />
  ));
  return form;
};

export default formGenerator;