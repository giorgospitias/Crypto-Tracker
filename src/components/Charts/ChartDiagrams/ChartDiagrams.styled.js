import styled from "styled-components";

export const ChartContainer = styled.div`
  background: ${(props) => props.theme.insideColor};
  border-radius: 5%;
  padding: 20px;
  width: 48%;
  @media (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ChartDetailsContainer = styled.div`
  position: absolute;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const ChartDetails = styled.div``;

export const ChartWrapper = styled.div`
  padding: 50px 20px 10px;
  @media (max-width: 500px) {
    padding: 20px 0 0;
  }
`;
