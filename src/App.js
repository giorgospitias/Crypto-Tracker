import "./App.css";
import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage/CoinPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { darkTheme, lightTheme } from "./styles/themes";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navbar toggleTheme={themeToggler} />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/Coins/:id" element={<CoinPage />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
