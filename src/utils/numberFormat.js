import numeral from "numeral";

export const priceFormat = (value) =>
  numeral(value).format(value < 1000 ? "0,0.00" : "0,0");

export const largeNumberFormat = (num) => numeral(num).format("0.00a");

export function percentageFormat(n) {
  const num = numeral(n).format("0.00");
  if (num >= 0) {
    return <div style={{ color: "rgb(0, 252, 42)" }}>{Math.abs(num)}%</div>;
  } else {
    return <div style={{ color: "rgb(254, 16, 64)" }}>{Math.abs(num)}%</div>;
  }
}
