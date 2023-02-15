import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  ChartsContainer,
  ChartHeader,
  ChartsWrapper,
} from "./CoinCharts.styled";
import LineChart from "../ChartDiagrams/LineChart";
import BarChart from "../ChartDiagrams/BarChart";
import ChartDaysSelector from "../ChartDaysSelector/ChartDaysSelector";
import { CryptoState } from "../../../CryptoContext";

function CoinCharts() {
  const [data, setData] = useState([]);
  const { currency, days } = CryptoState();
  const [loading, setLoading] = useState(false);

  const fetchChartData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
    );
    console.log(data);
    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchChartData();
  }, [currency, days]);

  return (
    <>
      <ChartsContainer>
        <ChartHeader>Overview</ChartHeader>
        <ChartsWrapper>
          <LineChart data={data} loading={loading} />
          <BarChart data={data} loading={loading} />
        </ChartsWrapper>
        <ChartDaysSelector />
      </ChartsContainer>
    </>
  );
}

export default CoinCharts;
