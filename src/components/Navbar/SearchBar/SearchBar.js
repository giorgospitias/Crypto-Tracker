import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import SearchIcon from "../../../assets/SearchIcon";
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  CoinResultWrapper,
} from "./SearchBar.styled";
import SearchList from "../SearchList/SearchList";

function SearchBar() {
  const [searchData, setSearchData] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResult, setShowResult] = useState(false);
  const showResultRef = useRef(null);

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
      setShowResult(true);
    } else {
      setShowResult(!showResult);
    }
  };

  const clearInput = () => {
    setSearchTerm("");
    setShowResult(!showResult);
  };

  return (
    <>
      <SearchContainer>
        <SearchForm>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search..."
            onChange={handleChange}
          />
        </SearchForm>
      </SearchContainer>
      {showResult && (
        <CoinResultWrapper ref={showResultRef}>
          {results.slice(0, 25).map((coin) => (
            <SearchList
              key={coin?.id}
              coin={coin?.id}
              name={coin?.name}
              logo={coin?.thumb}
              clearInput={clearInput}
            />
          ))}
        </CoinResultWrapper>
      )}
    </>
  );
}

export default SearchBar;
