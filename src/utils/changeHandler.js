import show from "../assets/show.svg";
import hide from "../assets/hide.svg";
export const changeHandler = (
  event,
  elementID,
  formType,
  formUpdate,
  validForm,
  options
) => {
  let updatedFormElement = {};
  let isValid = true;

  if (Array.isArray(event)) {
    if (elementID === "currency") {
      isValid = formType[elementID].validation(event) && isValid;
      updatedFormElement = {
        ...formType[elementID],
        value: event.map((item) => item.value),
        valid: isValid,
        selected: event,
      };
    } else {
      isValid = formType[elementID].validation(event[0].value) && isValid;
      updatedFormElement = {
        ...formType[elementID],
        value: event[0].value,
        valid: isValid,
        selected: event,
      };
    }
  } else {
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

export const removeItem = (
  event,
  elementID,
  formType,
  formUpdateFunc,
  validForm
) => {
  if (elementID === "currency") {
    let isValid = true;
    isValid = formType[elementID].validation(event) && isValid;

    const updatedFormElement = {
      ...formType[elementID],
      value: event.map((item) => item.value),
      valid: isValid,
      selected: event,
    };

    const updatedForm = {
      ...formType,
      [elementID]: updatedFormElement,
    };
    formUpdateFunc(updatedForm);
  }
};
