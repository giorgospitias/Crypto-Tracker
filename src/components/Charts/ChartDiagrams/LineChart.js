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
import { Oval } from "react-loader-spinner";
import { CoinChartDate } from "../../../utils/currentDate";
import { LoaderContainer } from "../../TableList/CoinsTable/CoinsTable.styled";

function LineChart({ data, loading }) {
  const chartMarket = data?.prices?.map((el) => el[1]);
  const chartLabel = data?.prices?.map((el) => {
    let date = new Date(el[0]);
    const formattedDate = CoinChartDate(date);

    return formattedDate;
  });

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
        borderColor: "rgba(0, 255, 95, 1)",
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
    gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");

    return {
      labels: chartLabel,
      datasets: [
        {
          label: "Price",
          data: chartMarket,
          backgroundColor: gradient,
          pointBackgroundColor: "rgba(0, 255, 95, 1)",
          fill: true,
        },
      ],
    };
  };

  const canvas = document.createElement("canvas");
  const coinData = createCanvas(canvas);
  console.log(chartMarket);
  return (
    <ChartContainer>
      {loading ? (
        <LoaderContainer>
          <div>
            <Oval
              height="70"
              width="70"
              color="rgb(0, 252, 42)"
              ariaLabel="bars-loading"
              visible={true}
            />
          </div>
        </LoaderContainer>
      ) : (
        <div>
          <LineChartDetails />
          <ChartWrapper>
            <Line data={coinData} options={options} />
          </ChartWrapper>
        </div>
      )}
    </ChartContainer>
  );
}

export default LineChart;
