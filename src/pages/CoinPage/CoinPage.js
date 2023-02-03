import React, { useState, useEffect } from "react";
import CoinSummary from "../../components/CoinPage/CoinSummary/CoinSummary";
import CoinDescription from "../../components/CoinPage/CoinDescription/CoinDescription";
import CurrencyConverter from "../../components/CoinPage/CurrencyConverter/CurrencyConverter";
import CoinPageChart from "../../components/CoinPage/CoinPageChart/CoinPageChart";
import { CoinPageContainer } from "./CoinPage.styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";

function CoinPage() {
  const [data, setData] = useState([]);
  const params = useParams();
  const { currency } = CryptoState();

  const fetchCoins = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`
    );
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency, params.id]);
  return (
    <CoinPageContainer>
      <CoinSummary data={data} />
      <CoinDescription data={data} />
      <CurrencyConverter data={data} />
      <CoinPageChart id={params.id} />
    </CoinPageContainer>
  );
}

export default CoinPage;
