import React, { useRef, useState, useEffect } from "react";
import { currentDate } from "../../../utils/currentDate";
import { CryptoState } from "../../../CryptoContext";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  CloseButton,
  BodyContent,
  CoinImage,
  CoinNameText,
  CoinImageContainer,
  StyledInput,
  StyledCurrency,
  ModalFooter,
  StyledButton,
} from "./Modal.styled";
import { v4 as uuid } from "uuid";
import axios from "axios";

const initialAssetState = {
  coinId: "",
  purchasedAmount: 0,
  date: currentDate(),
};

const initialSelectionState = {
  image: "",
  name: "Coin",
  symbol: "Symbol",
};

function Modal({ setIsOpen }) {
  const [asset, setAsset] = useState(initialAssetState);
  const [selection, setSelection] = useState(initialSelectionState);
  const [selected, setSelected] = useState([]);
  const { currency, symbol, selectedCoinData, setSelectedCoinData } =
    CryptoState();

  const fetchHistoryData = async (asset) => {
    const { coinId, purchasedAmount, date } = asset;

    const purchasedDate = date.split("-").reverse().join("-");

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${purchasedDate}`
    );
    const data = await response.json();

    const uniqueId = uuid().slice(0, 8);
    const historicPriceData = data?.market_data?.current_price?.usd;
    const { image, name, symbol, id } = data;
    const assetData = [
      ...selectedCoinData,
      {
        image: image?.small,
        name,
        symbol,
        id,
        uniqueId,
        purchasedDate,
        purchasedAmount,
        historicPriceData,
      },
    ];

    return assetData;
  };

  useEffect(() => {
    fetchHistoryData(asset.id);
  }, [asset.id, currency]);

  const clearState = () => {
    setAsset(initialAssetState);
    setIsOpen(false);
  };

  const handleItemSelected = (item) => {
    const minimizedImage = item.large.replace("large", "small");
    setAsset({ ...asset, coinId: item.id });
    setSelection({
      name: item.name,
      symbol: item.symbol,
      image: minimizedImage,
    });
  };

  const handleAmountChange = ({ value }) => {
    const newAmount = Number(value);
    setAsset({ ...asset, purchasedAmount: newAmount });
  };

  const handleDateChange = ({ target }) =>
    setAsset({ ...asset, date: target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (asset) {
      const assetDat = await fetchHistoryData(asset);
      setSelectedCoinData(assetDat);
      console.log(assetDat);
      setIsOpen(false);
      clearState();
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={clearState}>&times;</CloseButton>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Select Coins</ModalTitle>
          </ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <BodyContent>
                <CoinImageContainer>
                  <CoinImage src={selection.image} alt={asset.coinId} />
                </CoinImageContainer>
                <CoinNameText>
                  {selection.name}
                  {`(${selection?.symbol.toUpperCase()})`}
                </CoinNameText>
              </BodyContent>
              <BodyContent>
                <AutocompleteInput handleItemSelected={handleItemSelected} />
                <StyledCurrency
                  customInput={StyledInput}
                  isNumericString={true}
                  thousandSeparator={true}
                  decimalScale={2}
                  prefix={symbol}
                  value={asset.purchasedAmount}
                  onValueChange={handleAmountChange}
                />
                <StyledInput
                  type="date"
                  onChange={handleDateChange}
                  value={asset.date}
                />
              </BodyContent>
            </ModalBody>
            <ModalFooter>
              <StyledButton onClick={clearState}>Close</StyledButton>
              <StyledButton type="submit">Save and Continue</StyledButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default Modal;
