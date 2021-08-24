export const changeHandler = (
  event,
  elementID,
  formType,
  formUpdate,
  validForm
) => {
  let updatedFormElement = {};
  // console.log(elementID);
  if (elementID === "file") {
    updatedFormElement = {
      ...formType["file"],
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

