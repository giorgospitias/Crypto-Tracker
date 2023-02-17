import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 8px;
  margin: 0px 2px;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  color: ${(props) => props.theme.textColor};

  &:hover {
    background-color: ${(props) => props.theme.navInside};
  }
`;

export const SymbolDiv = styled.div`
  background: black;
  margin-right: 5px;
  display: flex;

  border-radius: 50%;
  height: 25px;
  width: 25px;

  p {
    color: limegreen;
    margin: auto;
  }
`;
