import React from "react";
import { ChartContainer, ChartWrapper } from "./ChartDiagrams.styled";
import LineChartDetails from "./LineChartDetails";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

function LineChart(props) {
  const chartMarket = props?.data?.prices?.map((el) => el[1]);
  const chartLabel = props?.data?.total_volumes?.map((el) =>
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
      line: {
        tension: 0.4,
        borderWidth: 3,
        borderColor: "#dbc473",
      },
      point: {
        radius: 0,
        hitRadius: 12,
        hoverRadius: 8,
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
          drawTicks: false,
          borderWidth: 0,
        },
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };

  const createCanvas = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "#000000");
    gradient.addColorStop(1, "#888888");

    return {
      labels: chartLabel,
      datasets: [
        {
          label: "Price",
          data: chartMarket,
          backgroundColor: gradient,
          pointBackgroundColor: "#dbc473",
          fill: true,
        },
      ],
    };
  };

  const canvas = document.createElement("canvas");
  const coinData = createCanvas(canvas);

  return (
    <ChartContainer>
      <LineChartDetails />
      <ChartWrapper>
        <Line data={coinData} options={options} />
      </ChartWrapper>
    </ChartContainer>
  );
}

export default LineChart;
