import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
      );
      setCoins(result.data);
      setFilteredCoins(result.data);
    };

    fetchData();
  }, []);

  const handleFilter = () => {
    setFilteredCoins(
      coins.filter((coin) => coin.tags && coin.tags.includes("Metaverse"))
    );
  };

  return (
    <div>
      <h1>Coin List</h1>
      <button onClick={handleFilter}>Filter by Metaverse</button>
      <ul>
        {filteredCoins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
