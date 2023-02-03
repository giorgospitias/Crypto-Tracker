import React from "react";
import { ChartContainer, ChartWrapper } from "./ChartDiagrams.styled";
import BarChartDetails from "./BarChartDetails";
import CoinCharts from "../CoinCharts/CoinCharts";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart(props) {
  const chartMarketVolumes = props?.data?.total_volumes?.map((el) => el[1]);
  const chartLabelDates = props?.data?.total_volumes?.map((el) =>
    new Date(el[0]).getDate()
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },

    scales: {
      x: {
        ticks: {
          font: {
            size: 9,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },

        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 8,
        },
      },
    },
  };
  const createCanvas = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(33, 114, 229, 1)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");

    return {
      labels: chartLabelDates,
      datasets: [
        {
          label: "Volume",
          data: chartMarketVolumes,
          backgroundColor: gradient,
          hoverBackgroundColor: "#6e8cfa",
          hoverBorderRadius: 10,
        },
      ],
    };
  };

  const canvas = document.createElement("canvas");
  canvas.style.margin = "0";
  const coinData = createCanvas(canvas);
  return (
    <ChartContainer>
      <BarChartDetails />
      <ChartWrapper>
        <Bar data={coinData} options={options} />
      </ChartWrapper>
    </ChartContainer>
  );
}

export default BarChart;
