import numeral from "numeral";

export const priceFormat = (value) =>
  numeral(value).format(value < 1000 ? "0,0.000" : "0,0");

export const percentageFormat = (num) => numeral(num).format("0.00");

export const largeNumberFormat = (num) => numeral(num).format("0.00a");
