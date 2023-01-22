import React from "react";
import {
  ChartContainer,
  ChartDetailsContainer,
  ChartDetails,
  ChartWrapper,
} from "./ChartDiagrams.styled";
import LineChartDetails from "./LineChartDetails";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart() {
  return (
    <ChartContainer>
      <LineChartDetails />
      <ChartWrapper></ChartWrapper>
    </ChartContainer>
  );
}

export default LineChart;
