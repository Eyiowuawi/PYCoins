export const phoneNumberCheck = (value) => {
  const regex = /^[+234][0-9]{12}/;
  return regex.test(value);
};

export const password = (value) => {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?.!@$%^&*-]).{8,}$/;

  return regex.test(value);
};

export const required = (value) => {
  return value.length > 0;
};

export const confirmPassword = (cpassword, fpassword) => {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?.!@$%^&*-]).{8,}$/;

  return fpassword === cpassword && regex.test(cpassword);
};

export const emailCheck = (value) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

export const notEmptyArray = (value) => {
  return value.length > 0;
};

export const urlValidator = (value) => {
  const regex =
    /^[(http(s)?):/(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)$/;

  return regex.test(value);
};

export const validateWithdraw = (value) => {
  const regex = /^\d*\.?\d*$/;
  return regex.test(value) && value.length > 0;
};

export const otpValidator = (value) => {
  return value.length === 6;
};

export const accountNumberValidator = (value) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(value);
};
