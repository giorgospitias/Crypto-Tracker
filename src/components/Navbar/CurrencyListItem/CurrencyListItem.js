import React from "react";
import { CryptoState } from "../../../CryptoContext";
import { ListItem, SymbolDiv } from "./CurrencyListItem.styled";

function CurrencyListItem({ value, closeCoinList, symbol, code }) {
  const { setCurrency } = CryptoState();
  return (
    <ListItem
      onClick={() => {
        setCurrency(value);
        closeCoinList();
      }}
    >
      <SymbolDiv>
        <p>{symbol}</p>
      </SymbolDiv>
      <p>{code}</p>
    </ListItem>
  );
}

export default CurrencyListItem;
