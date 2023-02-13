import styled from "styled-components";

import { ArrowUp } from "../../../utils/arrows";
import { ArrowDown } from "../../../utils/arrows";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 1.5em;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 4em;
  }
`;

export const ListHead = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.insideColor};
  border-radius: 6px;
  padding: 0.7em 1em;
  margin-bottom: 1em;
  margin-top: 2em;
  @media (min-width: 430px) {
    margin: 0 auto;
    background: ${(props) => props.theme.insideColor};
  }
  @media (min-width: 1024px) {
    width: 15%;
  }
`;

export const ListBody = styled.div`
  text-align: start;
  @media (min-width: 430px) {
    margin-left: 1em;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const OwnedCoin = styled.div`
  text-align: start;
`;

export const MarketPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1em;

  & + p {
    margin-bottom: 0.5em;
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const CoinName = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
`;

export const CoinSymbol = styled.span`
  text-transform: uppercase;
`;

export const ImageContainer = styled.div`
  background: ${(props) => props.theme.navInside};
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 1.2em 1em;
  margin: 1em 2em;
  border-radius: 12px;
`;

export const InfoContainer = styled.section`
  & > div,
  p {
    font-size: 0.7rem;
    padding: 1.5em 1em;
    background: ${(props) => props.theme.insideColor};
    margin-bottom: 0.8em;
    border-radius: 8px;
  }
  @media (min-width: 430px) {
    background: ${(props) => props.theme.insideColor};
    padding: 0.35em 0.1em;
    display: flex;
    border-radius: 8px;
    justify-content: space-between;
    align-items: space-between;
    padding: 0 1em;
    overflow: auto;
    & > div,
    p {
      background: ${(props) => props.theme.main};
      font-size: 0.8rem;
      padding: 0;
      padding-right: 1em;
      text-align: start;
      margin: 0.5em 0;
      margin-left: 1em;
      background: unset;
      margin-right: 0.5em;
    }
  }
  @media (min-width: 768px) {
    padding: 1.7em 1em;
    & > div,
    p {
      margin: 0;
      font-size: 0.85rem;
    }
  }
`;

export const SmallText = styled.p`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.8em;
  display: flex;
  align-items: center;
`;

export const GreenText = styled.span`
  color: #00fc2a;
  color: ${(props) =>
    props.price && (props.price <= 0 ? "#FE1040" : "#00fc2a")};
  margin-left: 1em;
  display: flex;
  align-items: center;
`;

export const PriceChangeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 1em;
`;

export const ParaGreen = styled.div`
  color: rgb(0, 252, 42);
  padding: 2px 4px;
`;

export const ParaRed = styled.div`
  color: #fe1040;
  padding: 2px 4px;
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;

export const PriceUp = styled.div`
  color: rgb(0, 252, 42);
  padding: 2px 4px;
  border-radius: 10px;
`;

export const PriceDown = styled.div`
  color: rgb(254, 16, 64);
  padding: 2px 4px;
  border-radius: 10px;
`;
export const PercentageBar = styled.div`
  width: 45px;
  background: ${(props) => props.theme.textColor};
  height: 9px;
  border-radius: 12px;
  margin: 0 0.5em;
`;

export const FillPercentage = styled.div`
  background: #00fc2a;
  border-radius: 12px;
  height: 100%;
  width: ${(props) => `${props.percentage}%`};
`;

export const DeleteButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fe1040;
  cursor: pointer;
  font-size: 30px;
  height: 30px;
  font-weight: 700;
`;

export const ArrowIcon = styled(ArrowUp)`
  margin-right: 0.2em;
`;
