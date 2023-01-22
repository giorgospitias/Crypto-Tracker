import React from "react";
import { ChartContainer, ChartWrapper } from "./ChartDiagrams.styled";
import BarChartDetails from "./BarChartDetails";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const today = new Date().toString().split(" ").splice(1, 3).join(" ");

function BarChart() {
  return (
    <ChartContainer>
      <BarChartDetails />
      <ChartWrapper></ChartWrapper>
    </ChartContainer>
  );
}

export default BarChart;
