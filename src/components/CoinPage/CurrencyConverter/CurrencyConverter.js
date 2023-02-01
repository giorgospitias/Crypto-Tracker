import React, { useState } from "react";
import { CryptoState } from "../../../CryptoContext";
import ConvertIcon from "../../../assets/Convert-Icon.png";
import {
  ConvertContainer,
  ConvertInnerContainer,
  ConvertElements,
  ConvertImage,
  Symbol,
  InputContainer,
} from "./CurrencyConverter.styled";

function CurrencyConverter({ data }) {
  const { currency, symbol } = CryptoState();

  const currentPrice = data?.market_data?.current_price[currency];
  const [coin, setCoin] = useState(1);
  const [price, setPrice] = useState(currentPrice);

  const CurrencyChangehandler = (e) => {
    const amount = e.target.value < 0 ? 0 : e.target.value;
    setPrice(amount);
    setCoin((amount / currentPrice).toFixed(5));
  };

  const CoinChangehandler = (e) => {
    const amount = e.target.value < 0 ? 0 : e.target.value;
    setCoin(amount);
    setPrice((amount * currentPrice).toFixed(2));
  };

  return (
    <ConvertContainer>
      <ConvertInnerContainer>
        <ConvertElements>
          <Symbol>{currency.toUpperCase()}</Symbol>
          <InputContainer>
            <span>{symbol}</span>{" "}
            <input
              value={price}
              onChange={CurrencyChangehandler}
              type="text"
              placeholder="Enter amount"
            />
          </InputContainer>
        </ConvertElements>
        <div>
          <ConvertImage src={ConvertIcon} alt="convert-icon" />
        </div>
        <ConvertElements>
          <Symbol>{data?.symbol?.toUpperCase()}</Symbol>
          <InputContainer>
            <input value={coin} onChange={CoinChangehandler} type="text" />
          </InputContainer>
        </ConvertElements>
      </ConvertInnerContainer>
    </ConvertContainer>
  );
}

export default CurrencyConverter;
