import { dateFormatter } from "./dateformatter";
export const formatTransactions = (data) => {
  const real = [];
  data.forEach((item) => {
    item.transfers.forEach((trans) => {
      const date = dateFormatter(trans.createdAt);
      real.push({ ...trans, ...item.metaData, date });
    });
  });

  return real;
};
