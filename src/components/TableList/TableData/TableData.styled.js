import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableDataRow = styled.tr`
  align-items: center;
`;

export const TableDataElement = styled.td`
  height: 93px;
  padding: 16px 16px 16px 0px;
  border-bottom: solid 1px grey;
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
