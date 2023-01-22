import React from "react";
import CoinsTable from "../../components/TableList/CoinsTable/CoinsTable";
import CoinCharts from "../../components/Charts/CoinCharts/CoinCharts";
import { HomePageContainer } from "./HomePage.styled";

function HomePage() {
  return (
    <div>
      <HomePageContainer>
        <CoinCharts />
        <CoinsTable />
      </HomePageContainer>
    </div>
  );
}

export default HomePage;
