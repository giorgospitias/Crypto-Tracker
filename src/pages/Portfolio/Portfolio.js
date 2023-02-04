import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionImage, setSelectedOptionImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list"
      );
      console.log(result.data);
      setFilteredOptions(result.data);
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setFilteredOptions(
      filteredOptions.filter((option) =>
        option.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleOptionClick = (option) => {
    setInputValue(option.name);
    setSelectedOption(option);
    setSelectedOptionImage(option.image);
    setFilteredOptions([]);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {filteredOptions.length > 0 && (
        <ul>
          {filteredOptions.map((option) => (
            <li key={option.id} onClick={() => handleOptionClick(option)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => console.log(selectedOption)}>Search</button>
      {selectedOptionImage && <img src={selectedOptionImage} />}
    </div>
  );
};

export default SearchInput;
