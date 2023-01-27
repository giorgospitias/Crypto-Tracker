import React from "react";
import CoinSummary from "../../components/CoinPage/CoinSummary/CoinSummary";
import CoinDescription from "../../components/CoinPage/CoinDescription/CoinDescription";
import CurrencyConverter from "../../components/CoinPage/CurrencyConverter/CurrencyConverter";
import CoinPageChart from "../../components/CoinPage/CoinPageChart/CoinPageChart";
import { CoinPageContainer, SummuryHeader } from "./CoinPage.styles";

function CoinPage() {
  return (
    <CoinPageContainer>
      <SummuryHeader>Summary</SummuryHeader>
      <CoinSummary />
      <CoinDescription />
      <CurrencyConverter />
      <CoinPageChart />
    </CoinPageContainer>
  );
}

export default CoinPage;
