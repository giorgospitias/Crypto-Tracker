import React, { useState, useEffect } from "react";
import axios from "axios";
import { chartDays } from "../../Charts/ChartDaysSelector/ChartDaysSelector";
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

  let labels = priceList?.map((price) => {
    let date = new Date(price[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return coindays === 1 ? time : date.toLocaleDateString();
  });

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
        label: `Price ( Past ${coindays} Days ) in ${currency}`,
        borderColor: "#00fc2a",
        backgroundColor: backgroundColor,
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
