import "./App.css";

import GlobalStyles from "./styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage/CoinPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" exact component={CoinPage} />
        <Route path="Portfolio" component={Portfolio} />
      </Routes>
    </>
  );
}

export default App;
