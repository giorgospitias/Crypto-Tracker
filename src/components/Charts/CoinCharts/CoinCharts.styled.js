import styled from "styled-components";

export const ChartsContainer = styled.div`
  margin: 30px 58px;
  @media (max-width: 1100px) {
    margin: 25px 25px;
  }
  @media (max-width: 600px) {
    margin: 25px 15px;
  }
`;

export const ChartHeader = styled.h1`
  margin-bottom: 1.5rem;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const ChartsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 650px) {
    margin-bottom: 2rem;
  }
`;
