import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableDataRow = styled.tr`
  align-items: center;
  &:hover {
    background-color: #1f2128;
  }
`;

export const TableDataElement = styled.td`
  height: 93px;
  padding: 16px 12px 16px 5px;
  border-bottom: solid 1px grey;
`;
export const TableDataInenerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const ArrowsContainer = styled.div`
  margin-right: 5px;
`;
export const DataTotalCoinWrapper = styled.div`
  margin-right: 40px;
  padding-bottom: 18px;
`;

export const LargeNumberContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SliderBarContainer = styled.div`
  background-color: ${(props) => props.firstColor};
  height: 6px;
  width: 100%;
  border-radius: 10px;
`;

export const SliderBar = styled.div`
  background-color: ${(props) => props.secondColor};
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.width}%;
`;

export const CoinLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};

  img {
    margin-right: 10px;
  }
`;
