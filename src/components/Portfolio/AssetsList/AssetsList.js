import React, { useState, useEffect } from "react";
import axios from "axios";
import { CryptoState } from "../../../CryptoContext";
import {
  ListWrapper,
  ListHead,
  ListBody,
  OwnedCoin,
  MarketPrice,
  Image,
  CoinName,
  CoinSymbol,
  ImageContainer,
  InfoContainer,
  SmallText,
  Subtitle,
  GreenText,
  Text,
  PercentageBar,
  FillPercentage,
  DeleteButton,
  ArrowIcon,
  ParaGreen,
  ParaRed,
  PriceChangeWrapper,
  PriceDown,
  PriceUp,
} from "./AssetsList.styled";
import {
  priceFormat,
  percentageFormat,
  calculatePercentage,
} from "../../../utils/numberFormat";
import { ArrowUp, ArrowDown } from "../../../utils/arrows";

function AssetsList({ asset }) {
  const [marketData, setMarketData] = useState([]);
  const { currency, symbol, setSelectedCoinData, selectedCoinData } =
    CryptoState();

  const marketvsvolumePercentage = calculatePercentage(
    marketData.market_cap?.usd,
    marketData.total_volume?.usd
  );

  const maxvscircSupplyPercentage = calculatePercentage(
    marketData?.circulating_supply,
    marketData?.max_supply
  );

  const currentPrice = marketData.current_price?.[currency];

  const { name, image, purchasedAmount, purchasedDate, uniqueId } = asset;
  const fetchCoins = async (id) => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    console.log(data.market_data);
    setMarketData(data.market_data);
  };

  useEffect(() => {
    fetchCoins(asset.id);
  }, [asset.id]);

  const handleDelete = (index) => {
    const updatedSelectedCoinData = [...selectedCoinData];
    updatedSelectedCoinData.splice(index, 1);
    setSelectedCoinData(updatedSelectedCoinData);
  };

  return (
    <ListWrapper>
      <ListHead>
        <ImageContainer>
          <Image src={asset.image} alt={asset.name} />
        </ImageContainer>
        <CoinName>
          {asset.name}
          <CoinSymbol>({asset.symbol})</CoinSymbol>
        </CoinName>
        <DeleteButton onClick={handleDelete}>&times;</DeleteButton>
      </ListHead>
      <ListBody>
        <MarketPrice>
          <Subtitle>Market Price:</Subtitle>
          <InfoContainer>
            <SmallText>
              Current Price:
              <GreenText>
                {" "}
                {symbol} {priceFormat(marketData?.current_price?.[currency])}
              </GreenText>
            </SmallText>
            <SmallText>
              Price Change 24h:
              <>
                {marketData?.price_change_percentage_24h > 0 ? (
                  <PriceChangeWrapper>
                    <ArrowUp />
                    <PriceUp>
                      {" "}
                      {symbol}
                      {priceFormat(Math.abs(marketData?.price_change_24h))}
                    </PriceUp>
                  </PriceChangeWrapper>
                ) : (
                  <PriceChangeWrapper>
                    <ArrowDown />
                    <PriceDown>
                      {symbol}
                      {priceFormat(Math.abs(marketData?.price_change_24h))}
                    </PriceDown>
                  </PriceChangeWrapper>
                )}
              </>
            </SmallText>
            <Text>
              Market Cap/Volume:
              <PriceChangeWrapper>
                <ParaGreen> {marketvsvolumePercentage.percentageA}%</ParaGreen>
              </PriceChangeWrapper>
              <PercentageBar>
                <FillPercentage
                  percentage={marketvsvolumePercentage.percentageA}
                />
              </PercentageBar>
              <Text>{marketvsvolumePercentage.percentageB}%</Text>
            </Text>
            <Text>
              Circ Supply/Max Supply:
              <PriceChangeWrapper>
                <ParaGreen> {maxvscircSupplyPercentage.percentageA}%</ParaGreen>
              </PriceChangeWrapper>
              <PercentageBar>
                <FillPercentage
                  percentage={maxvscircSupplyPercentage.percentageA}
                />
              </PercentageBar>
              <Text>{maxvscircSupplyPercentage.percentageB}%</Text>
            </Text>
          </InfoContainer>
        </MarketPrice>
        <OwnedCoin>
          <Subtitle>Your Coin:</Subtitle>
          <InfoContainer>
            <SmallText>
              Coin Amount:
              <PriceChangeWrapper>
                <ParaGreen>
                  {" "}
                  {symbol}
                  {asset.purchasedAmount}
                </ParaGreen>
              </PriceChangeWrapper>
            </SmallText>
            <SmallText>
              Amount Value:
              <GreenText>
                {" "}
                {symbol}
                {currentPrice * asset.purchasedAmount}
              </GreenText>
            </SmallText>
            <SmallText>
              Price change since purchase:
              <>
                {currentPrice - asset?.purchasedAmount <= 0 ? (
                  <PriceChangeWrapper>
                    <ArrowDown />
                    <ParaRed>
                      {symbol}
                      {priceFormat(
                        Math.abs(currentPrice - asset?.purchasedAmount)
                      )}
                    </ParaRed>
                  </PriceChangeWrapper>
                ) : (
                  <PriceChangeWrapper>
                    <ArrowUp />
                    <ParaGreen>
                      {symbol}
                      {priceFormat(currentPrice - asset?.purchasedAmount)}
                    </ParaGreen>
                  </PriceChangeWrapper>
                )}
              </>
            </SmallText>
            <SmallText>
              Purchase Date:
              <GreenText>{asset.purchasedDate}</GreenText>
            </SmallText>
          </InfoContainer>
        </OwnedCoin>
      </ListBody>
    </ListWrapper>
  );
}

export default AssetsList;
