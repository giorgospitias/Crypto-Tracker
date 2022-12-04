import "./App.css";
import { Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage/CoinPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/*<Routes>
        <Route path="/" element={<CoinPage />} />
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes> */}
    </>
  );
}

export default App;
