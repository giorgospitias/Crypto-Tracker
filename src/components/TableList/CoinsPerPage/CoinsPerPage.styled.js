import styled from "styled-components";

export const Main = styled("div")`
  font-family: sans-serif;
  font-weight: 600;
`;

export const DropDownHeader = styled("div")`
  display: flex;
  align-tems: center;
  justify-content: center;
  padding: 5px 0px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.insideColor};
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  top: 25%;
  right: 16%;
  background-color: ${(props) => props.theme.insideColor};
  border-radius: 10px;
  border: solid 1px ${(props) => props.theme.textColor};

  li {
    list-style: none;
    margin: 5px;
    padding: 2px 6px;
    border-radius: 10px;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.navInside};
    }
  }
`;

export const DropDownList = styled("ul")`
  
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${(props) => props.theme.textColor};
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
`;
