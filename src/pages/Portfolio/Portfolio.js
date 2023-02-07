import React, { useState, useEffect } from "react";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";
import Modal from "../../components/Portfolio/Modal/Modal";
import AssetsList from "../../components/Portfolio/AssetsList/AssetsList";
import {
  Container,
  Subtitle,
  Button,
  PageHead,
  AssetsListContainer,
} from "./Portfolio.styled";

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const { currency } = CryptoState();

  const toggleModal = () => setIsModalOpen(true);

  const fetchCoins = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`
    );
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);
  return (
    <Container>
      <PageHead>
        <Button onClick={toggleModal}>Add Asset</Button>
        {isModalOpen && <Modal setIsOpen={setIsModalOpen} />}
      </PageHead>
      <Subtitle>Your statistics</Subtitle>
      <AssetsListContainer>
        {data.map((asset) => {
          return <AssetsList key={asset.uniqueId} asset={asset} />;
        })}
      </AssetsListContainer>
    </Container>
  );
}

export default Portfolio;
