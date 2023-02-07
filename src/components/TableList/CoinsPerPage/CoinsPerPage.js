import React, { useState } from "react";
import { CryptoState } from "../../../CryptoContext";
import {
  Main,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ArrowDown,
} from "./CoinsPerPage.styled";

const options = ["10", "20", "50", "100"];

export default function CoinsPerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { setItemsPerPage } = CryptoState();

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setItemsPerPage(value);
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownHeader>
        {selectedOption || "10"}
        <ArrowDown onClick={toggling} />
      </DropDownHeader>

      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)}>{option}</ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </Main>
  );
}
