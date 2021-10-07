export const addPaymentUrl = (data) => {
  return {
    ...data,
    paymenturl: `${
      process.env.REACT_APP_ENV === "dev"
        ? process.env.REACT_APP_DEV_URL
        : REACT_APP_PROD_URL
    }/pay/${data.paymentSlug}`,
  };
};
