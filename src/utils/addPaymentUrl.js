export const addPaymentUrl = (data) => {
  return {
    ...data,
    paymenturl: `https://payercoins.com/pay/${data.paymentSlug}`,
  };
};
