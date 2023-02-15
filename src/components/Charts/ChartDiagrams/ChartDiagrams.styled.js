import styled from "styled-components";

export const ChartContainer = styled.div`
  background: ${(props) => props.theme.insideColor};
  border-radius: 20px;
  padding: 20px;
  width: 45%;
  @media (max-width: 900px) {
    width: 95%;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ChartDetailsContainer = styled.div`
  position: absolute;
  width: 40%;
  height: 15%;
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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
