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
  const [selectedCoinData, setSelectedCoinData] = useState([]);

  const { currency } = CryptoState();

  const toggleModal = () => setIsModalOpen(true);

  return (
    <Container>
      <PageHead>
        <Button onClick={toggleModal}>Add Asset</Button>
        {isModalOpen && <Modal setIsOpen={setIsModalOpen} />}
      </PageHead>
      <Subtitle>Your statistics</Subtitle>
      <AssetsListContainer>
        {selectedCoinData.map((item, index) => {
          return <AssetsList key={index} asset={item} />;
        })}
      </AssetsListContainer>
    </Container>
  );
}

export default Portfolio;
