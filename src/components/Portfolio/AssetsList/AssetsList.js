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
} from "./AssetsList.styled";
import { priceFormat, percentageFormat } from "../../../utils/numberFormat";

function AssetsList({ asset }) {
  const [marketdata, setData] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchCoins = async (id) => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    console.log(data.market_data);
    setData(data.market_data);
  };

  useEffect(() => {
    fetchCoins(asset.id);
  }, [asset.id]);
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
        <DeleteButton>&times;</DeleteButton>
      </ListHead>
      <ListBody>
        <MarketPrice>
          <Subtitle>Market Price:</Subtitle>
          <InfoContainer>
            <SmallText>
              Current Price:
              <GreenText></GreenText>
            </SmallText>
            <SmallText>
              Price Change 24h:
              <GreenText>
                <ArrowIcon />
              </GreenText>
            </SmallText>
            <Text>
              Market Cap/Volume:
              <GreenText>%</GreenText>
              <PercentageBar>
                <FillPercentage />
              </PercentageBar>
              <Text>%</Text>
            </Text>
            <Text>
              Circ Supply/Max Supply:
              <GreenText>%</GreenText>
              <PercentageBar>
                <FillPercentage />
              </PercentageBar>
              <Text>%</Text>
            </Text>
          </InfoContainer>
        </MarketPrice>
        <OwnedCoin>
          <Subtitle>Your Coin:</Subtitle>
          <InfoContainer>
            <SmallText>
              Coin Amount:
              <GreenText></GreenText>
            </SmallText>
            <SmallText>
              Amount Value:
              <GreenText></GreenText>
            </SmallText>
            <SmallText>
              Price change since purchase:
              <GreenText>
                <ArrowIcon />
              </GreenText>
            </SmallText>
            <SmallText>
              Purchase Date:
              <GreenText></GreenText>
            </SmallText>
          </InfoContainer>
        </OwnedCoin>
      </ListBody>
    </ListWrapper>
  );
}

export default AssetsList;
