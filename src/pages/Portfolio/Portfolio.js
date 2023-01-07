import React, { useState, useEffect } from "react";

function App() {
  // Declare a state variable for the response data
  const [data, setData] = useState(null);

  // Fetch the data from the API
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // Function to generate a color based on the index of the item in the array
  const getColor = (index) => {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    return colors[index % colors.length];
  };

  return (
    <div>
      {data &&
        data.map((item, index) => (
          // Render an item component for each item in the array
          <Item key={item.id} item={item} color={getColor(index)} />
        ))}
    </div>
  );
}

// Item component
function Item({ item, color }) {
  return (
    <div style={{ color }}>
      {item.name} ({item.symbol})
    </div>
  );
}

export default App;
