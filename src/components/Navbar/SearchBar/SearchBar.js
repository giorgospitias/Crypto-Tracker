import React, { useEffect, useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [showResult, setShowResult] = useState(false);

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setShowResult(false);
  });

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
  const handleClick = () => setShowResult(!showResult);
  const clearInput = () => {
    setSearchTerm("");
    setShowResult(false);
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
            onClick={handleClick}
            value={searchTerm}
          />
        </SearchForm>
      </SearchContainer>
      {showResult && (
        <CoinResultWrapper ref={ref}>
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
