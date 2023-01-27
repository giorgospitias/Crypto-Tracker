import styled from "styled-components";

export const CoinPageContainer = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  /* padding-top: 12%; */
  z-index: 0;
  @media (max-width: 1000px) {
    padding-top: 12%;
  }
`;

export const SummuryHeader = styled.div`
  margin: 10px 210px;
  font-size: 24px;
  color: ${(props) => props.theme.textColor};
`;
