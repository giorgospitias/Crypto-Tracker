import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import {
  Root,
  InputContainer,
  Label,
  Input,
  ArrowIcon,
  AutoCompleteIcon,
  AutoCompleteContainer,
  AutoCompleteItem,
  AutoCompleteItemButton,
} from "./AutocompleteInput.styled";

function AutocompleteInput({ handleItemSelected }) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");

  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResult, setShowResult] = useState(false);
  const fetchSearchData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${searchTerm}`
    );
    console.log(data.coins);
    setSearchData(data?.coins);
  };

  useEffect(() => {
    fetchSearchData();
  }, []);

  const results = searchData.filter((item) => {
    return searchTerm.toLowerCase() === ""
      ? item
      : item.id.toLowerCase().includes(searchTerm);
  });

  console.log(results);
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm) {
      setIsVisible(true);
      setText(searchTerm);
    } else {
      setIsVisible(!isVisible);
    }
  };

  const clearInput = () => {
    setSearchTerm("");
    setIsVisible(!isVisible);
  };

  const suggestionSelected = (item) => {
    setIsVisible(false);
    setText(item.name);
    handleItemSelected(item);
  };

  const toggle = () => setIsVisible(!isVisible);

  return (
    <Root>
      <InputContainer onClick={clearInput}>
        <Input
          autoComplete="off"
          name="coinName"
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Select Coin"
        />
        <AutoCompleteIcon isOpen={isVisible} onClick={clearInput}>
          <ArrowIcon />
        </AutoCompleteIcon>
      </InputContainer>
      {isVisible && (
        <AutoCompleteContainer>
          {results.slice(0, 25)?.map((item) => (
            <AutoCompleteItem key={uuid()}>
              <AutoCompleteItemButton onClick={() => suggestionSelected(item)}>
                {item.name}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </Root>
  );
}

export default AutocompleteInput;
