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
  const { currency, symbol } = CryptoState();

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

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={clearState}>&times;</CloseButton>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Select Coins</ModalTitle>
          </ModalHeader>
          <form onSubmit={clearState}>
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
