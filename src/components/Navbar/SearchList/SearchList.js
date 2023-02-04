import React from "react";
import { CoinWrapper, ElementsWrapper } from "./SearchList.styled";

function SearchList({ coin, logo, name, rank, symbol, clearInput }) {
  return (
    <CoinWrapper to={`/coins/${coin}`} onClick={() => clearInput()}>
      <ElementsWrapper>
        <img src={logo} alt="coin" />
        <p>{name}</p>
      </ElementsWrapper>
    </CoinWrapper>
  );
}

export default SearchList;
