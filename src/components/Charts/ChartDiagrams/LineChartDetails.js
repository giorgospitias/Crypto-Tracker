import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChartDetailsContainer, ChartDetails } from "./ChartDiagrams.styled";
import { CryptoState } from "../../../CryptoContext";

const today = new Date().toString().split(" ").splice(1, 3).join(" ");

function LineChartDetails() {
  const [legend, setLegend] = useState([]);
  const { currency, symbol } = CryptoState();

  const getChartDetails = async () => {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true`
    );

    const newList = [data[0]];
    setLegend(newList);
  };
  useEffect(() => {
    getChartDetails();
  }, [currency]);

  return (
    <>
      {legend.map((item) => (
        <ChartDetailsContainer>
          <ChartDetails key={item}>
            <p>Price</p>
            <p>
              {symbol}
              {(item.low_24h / 1000).toFixed(3)}K
            </p>
            <p>{today}</p>
          </ChartDetails>
        </ChartDetailsContainer>
      ))}
    </>
  );
}

export default LineChartDetails;
