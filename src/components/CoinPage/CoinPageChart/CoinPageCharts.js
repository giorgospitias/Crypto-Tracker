import React, { useState, useEffect } from "react";
import axios from "axios";
import { chartDays } from "../../Charts/ChartDaysSelector/ChartDaysSelector";
import { CoinChartDate } from "../../../utils/currentDate";
import { CryptoState } from "../../../CryptoContext";
import {
  ButtonsContainer,
  ButtonWrapper,
  CoinLineChartContainer,
} from "./CoinPageCharts.styled";
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

  let labels = chartData?.prices?.map((coin) => {
    let date = new Date(coin[0]);
    const formattedDate = CoinChartDate(date);

    return formattedDate;
  });

  console.log(priceList);
  const backgroundColor = (context) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    return gradient;
  };

  const LineChartData = {
    labels: labels,
    datasets: [
      {
        data: priceList,
        label: `Price ( Past ${coindays} Days ) in ${currency}`,
        borderColor: "#00fc2a",
        backgroundColor: backgroundColor,
        pointBackgroundColor: "#00fc2a",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
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
