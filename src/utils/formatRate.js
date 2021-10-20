export const formatRates = (value) => {
  const val = value.split(".");
  if (val[0].length < 1) {
    const t = parseFloat(+value).toFixed(6);
    console.log(t);
  }
  if (val[0].length >= 3 && val[0].length < 4) {
    const t = parseFloat(+value).toFixed(6);
    const newt = `${t.substring(0, 1)},${t.substring(1)}`;
    console.log(newt);
  }

  if (val[0].length >= 5) {
    const t = parseFloat(+value).toFixed(6);
    const newt = `${t.substring(0, 1)},${t.substring(1)}`;
    console.log(newt);
  }
};
