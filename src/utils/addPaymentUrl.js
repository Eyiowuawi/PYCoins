export const addPaymentUrl = (data) => {
  return {
    ...data,
    paymenturl: `${process.env.REACT_APP_DEV_URL}/pay/${data.paymentSlug}`,
  };
};
