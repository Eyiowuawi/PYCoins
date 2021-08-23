export const phoneNumberCheck = (value) => {
  const regex = /^[+234][0-9]{13}/;
  return regex.test(value);
};

export const password = (value) => {
  const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,20}$/;
  // console.log(regex.test(value.trim()));
  return regex.test(value);
};

export const required = (value) => {
  return value.length > 0;
};

export const confirmPassword = (cpassword, fpassword) => {
  return fpassword === cpassword;
};

export const emailCheck = (value) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};
