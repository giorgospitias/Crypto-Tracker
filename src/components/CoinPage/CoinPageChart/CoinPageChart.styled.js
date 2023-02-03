import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.selected ? "#00d93b" : props.theme.main};
    border: 1px solid #00d93b;
    margin-right: 2px;
  }

  p {
    margin-left: 2px;
  }
`;

export const CoinLineChartContainer = styled.div`
  height: 300px;
`;
