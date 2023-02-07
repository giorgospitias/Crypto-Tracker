import styled from "styled-components";
import { NumericFormat } from "react-number-format";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1em;
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: ${(props) => props.theme.navInside};
  border-radius: 12px;
  padding: 1em 0;
  @media (min-width: 500px) {
    margin-top: 5em;
  }
  @media min-width:768px {
    max-width: 800px;
  }
`;

export const ModalContent = styled.div`
  padding: 0em 2.8em;
  overflow: auto;
`;

export const ModalHeader = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin: 1em 0;
`;

export const ModalTitle = styled.p`
  margin: 0 auto;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  z-index: 999;
  color: #06d554;
  font-size: 3em;
  margin-top: 0;
  font-weight: bold;
  height: 0;
  display: flex;
  justify-content: end;
  padding-right: 0.5em;
  &:hover,
  &:focus {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
  @media min-width:1440px {
    padding-right: 0.2em;
  }
`;

export const BodyContent = styled.div`
  margin: 0 auto;
  &:first-child {
    background: ${(props) => props.theme.main};
    border-radius: 6px;
    padding: 1.5em 2em;
    margin: 0 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
  }
  &:last-child {
    display: flex;
    flex-direction: column;
    margin-top: 4em;
    width: 60vw;
  }
  @media (min-width: 500px) {
    &:first-child {
      padding: 1em 2em;
      margin: 0 2em;
    }
    &:last-child {
      margin-top: 0;
    }
  }
  @media (min-width: 768px) {
    max-width: 700px;
    &:first-child {
      max-width: 160px;
    }
  }
`;

export const CoinImage = styled.img`
  object-fit: cover;
  min-width: 100%;
`;

export const CoinNameText = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};
`;

export const CoinImageContainer = styled.div`
  background: ${(props) => props.theme.navInside};
  padding: 1em;
  margin-bottom: 0.25em;
  border-radius: 12px;
`;

export const StyledInput = styled.input`
  background: ${(props) => props.theme.main};
  padding: 1.5em 1em;
  border: none;
  color: ${(props) => props.theme.textColor};
  border-radius: 12px;
  margin-bottom: 1em;
  width: 100%;

  &:focus {
    outline: #06d554 solid 2px;
  }
  &[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    opacity: 0.6;
    filter: invert(0.8);
    &:hover {
      opacity: 1;
    }
  }
`;

export const StyledCurrency = styled(NumericFormat)`
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.textColor};
  border-radius: 12px;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 500px) {
    margin: 0 auto;
    margin-top: 1.5em;
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
  }
`;

export const StyledButton = styled.button`
  border: none;
  box-shadow: none;
  border-radius: 8px;
  color: ${(props) => props.theme.textColor};
  width: 60vw;
  padding: 1.5em 1em;
  margin-bottom: 1em;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    margin-top: 1em;
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.main};
    &:hover,
    &:focus {
      color: ${(props) => props.theme.textColor};
      background: #06d554;
    }
  }
  &:nth-child(2) {
    background: #06d554;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.textColor};
      background-color: ${(props) => props.theme.main};
    }
  }

  @media (min-width: 500px) {
    display: flex;
    margin: 0 auto;
    &:first-child,
    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:first-child {
      margin: 0 auto;
      margin-right: 2em;
    }
    &:nth-child(2) {
    }
  }
`;
