import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 8px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};

  &:hover {
    background-color: ${(props) => props.theme.navInside};
  }
`;

export const ElementsWrapper = styled.li`
  display: flex;
  align-items: center;
  font-weight: 200;

  img {
    height: 12px;
    margin-right: 8px;
  }

  p {
    margin-right: 8px;
  }
`;
