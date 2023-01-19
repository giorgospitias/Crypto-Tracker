import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("eur");
  const [symbol, setSymbol] = useState("€");
  const [loading, setLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    if (currency === "gbp") setSymbol("£");
    else if (currency === "usd") setSymbol("$");
    else if (currency === "eur") setSymbol("€");
    else if (currency === "btc") setSymbol("₿");
    else if (currency === "eth") setSymbol("Ξ");
  }, [currency]);

  return (
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        loading,
        setLoading,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
