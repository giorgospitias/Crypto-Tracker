import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  ChartsContainer,
  ChartHeader,
  ChartsWrapper,
} from "./CoinCharts.styled";
import LineChart from "../ChartDiagrams/LineChart";
import BarChart from "../ChartDiagrams/BarChart";
import { CryptoState } from "../../../CryptoContext";

function CoinCharts() {
  const [data, setData] = useState([]);
  const { currency, symbol } = CryptoState();
  const [days, setDays] = useState(30);
  const fetchChartData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
    );
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchChartData();
  }, [currency]);

  return (
    <>
      <ChartsContainer>
        <ChartHeader>Overview</ChartHeader>
        <ChartsWrapper>
          <LineChart />
          <BarChart />
        </ChartsWrapper>
      </ChartsContainer>
    </>
  );
}

export default CoinCharts;
