import show from "../assets/show.svg";
import hide from "../assets/hide.svg";
export const changeHandler = (
  event,
  elementID,
  formType,
  formUpdate,
  validForm
) => {
  let updatedFormElement = {};
  if (elementID === "businessDocument") {
    updatedFormElement = {
      ...formType["businessDocument"],
      valid: true,
      value: event.target.files[0],
      label: event.target.files[0].name,
    };
  } else {
    let passwordValue = formType["password"]
      ? formType["password"].value
      : null;
    let isValid = true;
    isValid =
      formType[elementID].validation(event.target.value, passwordValue) &&
      isValid;

    updatedFormElement = {
      ...formType[elementID],
      value: event.target.value,
      valid: isValid,
    };
  }

  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };

  if (validForm) {
    let formIsValid = true;
    for (let elementID in updatedForm) {
      formIsValid = updatedForm[elementID].valid && formIsValid;
    }
    validForm(formIsValid);
  }
  formUpdate(updatedForm);
};

export const handleBlur = (elementID, formType, updateFunction) => {
  const updatedFormElement = {
    ...formType[elementID],
    blur: true,
  };

  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };
  return updateFunction(updatedForm);
};

export const showPassword = (evt, elementID, formType, formUpdateFunc) => {
  // evt.stopPropagation();
  const updatedFormElement = {
    ...formType[elementID],
    show: !formType[elementID].show,
    type: formType[elementID].show ? "text" : "password",
    image: formType[elementID].show ? hide : show,
  };

  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };

  formUpdateFunc(updatedForm);
};

export const selectHandler = (
  option,
  elementID,
  formType,
  formUpdateFunc,
  validForm
) => {
  let isValid = true;
  if (Array.isArray(option)) {
    isValid = formType[elementID].validation(option) && isValid;

    const updatedFormElement = {
      ...formType[elementID],
      value: option.map((item) => item.value),
      valid: isValid,
      selected: option,
    };
    const updatedForm = {
      ...formType,
      [elementID]: updatedFormElement,
    };

    formUpdateFunc(updatedForm);
  } else {
    isValid = formType[elementID].validation(option.value) && isValid;

    const updatedFormElement = {
      ...formType[elementID],
      value: option.value,
      valid: isValid,
      selected: option,
    };
    const updatedForm = {
      ...formType,
      [elementID]: updatedFormElement,
    };
    if (validForm) {
      let formIsValid = true;
      for (let elementID in updatedForm) {
        formIsValid = updatedForm[elementID].valid && formIsValid;
      }
      validForm(formIsValid);
    }
    formUpdateFunc(updatedForm);
  }
};
