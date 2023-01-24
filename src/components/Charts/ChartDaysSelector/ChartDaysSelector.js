import React from "react";
import {
  ChartDaysContainer,
  ChartDayslist,
  ChartDaysButtons,
} from "./ChartDaysSelector.styled";
import { CryptoState } from "../../../CryptoContext";

export const chartDays = [
  {
    label: "1w",
    value: 7,
  },
  {
    label: "1m",
    value: 30,
  },
  {
    label: "3m",
    value: 90,
  },
  {
    label: "6m",
    value: 180,
  },
  {
    label: "1y",
    value: 365,
  },
];

function ChartDaysSelector() {
  const { days, setDays } = CryptoState();
  return (
    <ChartDaysContainer>
      <ChartDayslist>
        {chartDays.map((day) => (
          <ChartDaysButtons
            onClick={() => setDays(day.value)}
            selected={day.value === days}
          >
            {day.label}
          </ChartDaysButtons>
        ))}
      </ChartDayslist>
    </ChartDaysContainer>
  );
}

export default ChartDaysSelector;
