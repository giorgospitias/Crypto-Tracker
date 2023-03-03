import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
      props.selected ? "#00fc2a" : props.theme.main};
    border: 1px solid #00fc2a;
    margin-right: 2px;
  }

  p {
    margin-left: 2px;
  }
`;

export const CoinLineChartContainer = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;
