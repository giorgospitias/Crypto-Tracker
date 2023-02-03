import React, { useState, useEffect } from "react";
import axios from "axios";
import { chartDays } from "../../Charts/ChartDaysSelector/ChartDaysSelector";
import { CryptoState } from "../../../CryptoContext";
import {
  ButtonsContainer,
  ButtonWrapper,
  CoinLineChartContainer,
} from "./CoinPageChart.styled";
import { Line } from "react-chartjs-2";

function CoinPageChart({ id }) {
  const [chartData, setChartData] = useState([]);
  const { currency } = CryptoState();
  const [coindays, setCoinDays] = useState(30);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${coindays}&interval=daily`
    );
    console.log(data);
    setChartData(data);
  };

  useEffect(() => {
    fetchData();
  }, [currency, coindays]);

  let priceList = chartData?.prices?.map((coin) => coin[1]);
  let labels = priceList?.map((price, index) => index);

  const backgroundColor = (context) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 210);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
    gradient.addColorStop(0, "rgba(44, 47, 54, .5)");
    return gradient;
  };

  const LineChartData = {
    labels: labels,
    datasets: [
      {
        data: priceList,
        tension: 0.4,
        borderColor: "rgba(44, 47, 54, 1)",
        fill: true,
        backgroundColor: backgroundColor,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };

  return (
    <div>
      <ButtonsContainer>
        {chartDays.map((day) => (
          <ButtonWrapper
            key={day.value}
            onClick={() => setCoinDays(day.value)}
            selected={day.value === coindays}
          >
            <button></button>
            <p>{day.label}</p>
          </ButtonWrapper>
        ))}
      </ButtonsContainer>
      <CoinLineChartContainer>
        <Line data={LineChartData} options={options} />
      </CoinLineChartContainer>
    </div>
  );
}
export default CoinPageChart;
