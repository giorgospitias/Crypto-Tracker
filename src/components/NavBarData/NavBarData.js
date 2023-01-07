import React, { useState, useEffect } from "react";
import axios from "axios";
import btcLogo from "../../assets/bitcoin-logo.png";
import ethLogo from "../../assets/ethereum-logo.png";
import { largeNumberFormat } from "../../utils/numberFormat";
import { Dot } from "../../utils/arrows";
import {
  NavbarDataContainer,
  InnerContainer,
  InnerText,
  SliderBarContainer,
  SliderBar,
  LogoIcon,
} from "./NavBarData.styled";
import { CryptoState } from "../../CryptoContext";

const NavBarData = () => {
  const [data, setData] = useState([]);
  const { currency, symbol } = CryptoState();

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
      <NavbarDataContainer>
        <InnerContainer>
          <InnerText>Coins {data.data?.active_cryptocurrencies}</InnerText>
        </InnerContainer>
        <InnerContainer>
          <InnerText>Exchange {data.data?.markets}</InnerText>
        </InnerContainer>
        <InnerContainer>
          <Dot />
          <InnerText>
            {symbol}
            {largeNumberFormat(
              data.data?.total_market_cap[currency]
            ).toUpperCase()}
          </InnerText>
        </InnerContainer>
        <InnerContainer>
          <Dot />
          <InnerText>
            {symbol}
            {largeNumberFormat(data.data?.total_volume[currency]).toUpperCase()}
          </InnerText>
          <SliderBarContainer>
            <SliderBar width={largeNumberFormat(data?.data?.totalVolume)} />
          </SliderBarContainer>
        </InnerContainer>
        <InnerContainer>
          <LogoIcon src={btcLogo} alt="bitcoin-logo" />
          <InnerText>
            {Math.round(data.data?.market_cap_percentage.btc)}%
          </InnerText>
          <SliderBarContainer>
            <SliderBar
              width={Math.round(data.data?.market_cap_percentage?.btc)}
            />
          </SliderBarContainer>
        </InnerContainer>
        <InnerContainer>
          <LogoIcon src={ethLogo} alt="ethereum-logo" />
          <InnerText>
            {Math.round(data.data?.market_cap_percentage.eth)}%
          </InnerText>
          <SliderBarContainer>
            <SliderBar
              width={Math.round(data.data?.market_cap_percentage.eth)}
            />
          </SliderBarContainer>
        </InnerContainer>
      </NavbarDataContainer>
    </>
  );
};

export default NavBarData;
