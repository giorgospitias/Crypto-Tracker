import "./App.css";

import GlobalStyles from "./styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage/CoinPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Coins" element={<CoinPage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
