import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  SummaryWrapper,
  SummaryDataContainer,
  LogoWrapper,
  CoinLink,
  LinkText,
  LinkIcon,
  GreenNumber,
  RedNumber,
  PriceContainer,
  LayerIconContainer,
  BottomContainer,
  AllTimeHighContainer,
  AllTimeLowContainer,
  LayerIcon,
  NumberListContainer,
  NumberContainer,
  PlasIcon,
  NumberData,
  TotalVolume,
  MaxSupply,
} from "./CoinSummary.styled";
import { CryptoState } from "../../../CryptoContext";
import LinkImage from "../../../assets/Icon-link.png";
import LayersIcon from "../../../assets/Icon-layer-group.png";
import {
  priceFormat,
  percentageFormat,
  largeNumberFormat,
} from "../../../utils/numberFormat";
import { ArrowUp, ArrowDown } from "../../../utils/arrows";

function CoinSummary() {
  const [data, setData] = useState([]);
  const { currency, symbol } = CryptoState();
  const params = useParams();

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
    <SummaryWrapper>
      <SummaryDataContainer>
        <LogoWrapper>
          <img src={data?.image?.small} alt="coin" />
        </LogoWrapper>
        <p>
          {data?.name} ({data?.symbol?.toUpperCase()})
        </p>
        <CoinLink
          href={data?.links?.homepage[0]}
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon src={LinkImage} alt="link-icon"></LinkIcon>
          <LinkText href={data?.links?.homepage[0]} target="_blank">
            {data?.links?.homepage[0]}
          </LinkText>
        </CoinLink>
      </SummaryDataContainer>
      <SummaryDataContainer>
        <h2>
          {symbol}
          {priceFormat(data?.market_data?.current_price[currency])}
        </h2>
        <PriceContainer>
          {data?.market_data?.price_change_percentage_24h <= 0 ? (
            <>
              <ArrowUp style={{ marginTop: 0 }} />

              <GreenNumber>
                {percentageFormat(
                  Math.abs(
                    data?.market_data?.price_change_percentage_24h_in_currency[
                      currency
                    ]
                  )
                )}
              </GreenNumber>
            </>
          ) : (
            <>
              <ArrowDown style={{ marginTop: 0 }} />
              <RedNumber>
                {percentageFormat(
                  Math.abs(
                    data?.market_data?.price_change_percentage_24h_in_currency[
                      currency
                    ]
                  )
                )}
              </RedNumber>
            </>
          )}
        </PriceContainer>
        <LayerIconContainer>
          <LayerIcon src={LayersIcon} alt="layers-icon"></LayerIcon>
        </LayerIconContainer>
        <BottomContainer>
          <AllTimeHighContainer>
            <p>
              All time High:
              <GreenNumber>
                {symbol}
                {priceFormat(data?.market_data?.ath[currency])}
              </GreenNumber>
            </p>
            <span>
              {new Date(data?.market_data?.ath_date[currency]).toUTCString()}
            </span>
          </AllTimeHighContainer>
          <AllTimeLowContainer>
            <p>
              All time Low:
              <RedNumber>
                {symbol}
                {priceFormat(data?.market_data?.atl[currency])}
              </RedNumber>
            </p>
            <span>
              {new Date(data?.market_data?.atl_date[currency]).toUTCString()}
            </span>
          </AllTimeLowContainer>
        </BottomContainer>
      </SummaryDataContainer>
      <SummaryDataContainer>
        <NumberListContainer>
          <NumberContainer>
            <PlasIcon>+</PlasIcon>
            <NumberData>
              Market Cap: {symbol}
              {largeNumberFormat(data?.market_data?.market_cap[currency])}
            </NumberData>
          </NumberContainer>
          <NumberContainer>
            <PlasIcon>+</PlasIcon>
            <NumberData>
              Fully Diluted Valuation: {symbol}
              {largeNumberFormat(
                data.market_data?.fully_diluted_valuation[currency]
              )}
            </NumberData>
          </NumberContainer>
          <NumberContainer>
            <PlasIcon>+</PlasIcon>
            <NumberData>
              Volume 24h: {symbol}
              {largeNumberFormat(data?.market_data?.total_volume[currency])}
            </NumberData>
          </NumberContainer>
          <NumberContainer style={{ marginBottom: "18px" }}>
            <PlasIcon>+</PlasIcon>
            <NumberData>
              Volume / Market Cap:{" "}
              {(
                data?.market_data?.total_volume[currency] /
                data?.market_data?.market_cap[currency]
              ).toFixed(6)}
              ...
            </NumberData>
          </NumberContainer>
          <NumberContainer>
            <PlasIcon>+</PlasIcon>
            <NumberData>
              <TotalVolume>Total Volume:</TotalVolume>{" "}
              {data?.market_data?.total_volume[currency]}{" "}
              {data?.symbol?.toUpperCase()}
            </NumberData>
          </NumberContainer>
          <NumberContainer>
            <PlasIcon>+</PlasIcon>
            <NumberData>
              Circulating Supply: {data?.market_data?.circulating_supply}{" "}
              {data?.symbol?.toUpperCase()}
            </NumberData>
          </NumberContainer>
          <NumberContainer>
            <PlasIcon>+</PlasIcon>
            <NumberData>
              <MaxSupply>Max Supply:</MaxSupply> {data?.market_data?.max_supply}{" "}
              {data?.symbol?.toUpperCase()}
            </NumberData>
          </NumberContainer>
        </NumberListContainer>
      </SummaryDataContainer>
    </SummaryWrapper>
  );
}

export default CoinSummary;
