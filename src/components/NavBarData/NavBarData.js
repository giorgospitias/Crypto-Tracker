import React, { useState, useEffect } from "react";
import axios from "axios";
import btcLogo from "../../assets/bitcoin-logo.png";
import ethLogo from "../../assets/ethereum-logo.png";
import { largeNumberFormat } from "../../utils/numberFormat";
import { Dot } from "../../utils/arrows";
import {
  MarketDataWrapper,
  InnerWrapper,
  InnerText,
  SliderBarWraper,
  SliderBar,
  LogoIcon,
} from "./NavBarData.styled";
import { CryptoState } from "../../CryptoContext";

const NavBarData = () => {
  const [data, setData] = useState([]);
  const { currency, symbol } = CryptoState();
  {
    /*} https://api.coingecko.com/api/v3/global*/
  }
  console.log(currency);
  const fetchCoins = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/global`);

    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return (
    <>
      <MarketDataWrapper>
        <InnerWrapper>
          <InnerText>Coins {data?.data?.active_cryptocurrencies}</InnerText>
        </InnerWrapper>
        <InnerWrapper>
          <InnerText>Exchange {data?.data?.markets}</InnerText>
        </InnerWrapper>
        <InnerWrapper>
          <Dot />
          <InnerText>
            {symbol}
            {largeNumberFormat(
              data?.data?.total_market_cap[currency]
            ).toUpperCase()}
          </InnerText>
        </InnerWrapper>
        <InnerWrapper>
          <Dot />
          <InnerText>
            {symbol}
            {largeNumberFormat(
              data?.data?.total_volume[currency]
            ).toUpperCase()}
          </InnerText>
          <SliderBarWraper>
            <SliderBar width={largeNumberFormat(data?.data?.totalVolume)} />
          </SliderBarWraper>
        </InnerWrapper>
        <InnerWrapper>
          <LogoIcon src={btcLogo} alt="bitcoin-logo" />
          <InnerText>
            {Math.round(data?.data?.market_cap_percentage.btc)}%
          </InnerText>
          <SliderBarWraper>
            <SliderBar
              width={Math.round(data?.data?.market_cap_percentage.btc)}
            />
          </SliderBarWraper>
        </InnerWrapper>
        <InnerWrapper>
          <LogoIcon src={ethLogo} alt="ethereum-logo" />
          <InnerText>
            {Math.round(data?.data?.market_cap_percentage.eth)}%
          </InnerText>
          <SliderBarWraper>
            <SliderBar
              width={Math.round(data?.data?.market_cap_percentage.eth)}
            />
          </SliderBarWraper>
        </InnerWrapper>
      </MarketDataWrapper>
    </>
  );
};

export default NavBarData;
