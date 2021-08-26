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
  let formIsValid = true;
  for (let elementID in updatedForm) {
    formIsValid = updatedForm[elementID].valid && formIsValid;
  }
  formUpdate(updatedForm);
  validForm(formIsValid);
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



export const showPassword = (elementID, formType, formUpdateFunc) => {
  const updatedFormElement = {
    ...formType[elementID],
    show: !formType[elementID].show,
    type: formType[elementID].show ? "text" : "password"
  };

  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };

  formUpdateFunc(updatedForm);
};
