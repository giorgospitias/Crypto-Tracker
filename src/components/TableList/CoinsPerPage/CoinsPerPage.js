import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
`;

const DropDownHeader = styled("div")`
  display: flex;
  align-tems: center;
  justify-content: center;
  padding: 5px 0px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.insideColor};
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  top: 25%;
  right: 34%;
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

const DropDownList = styled("ul")`
  
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["10", "20", "50", "100"];

export default function CoinsPerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "10"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </Main>
  );
}
