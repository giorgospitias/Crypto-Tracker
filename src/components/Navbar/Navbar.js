import React from "react";

import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLeftSide,
  NavRightSide,
  SearchContainer,
  CarencyExchangeContainer,
  ThemeIconContainer,
  SearchInput,
  SearchForm,
} from "./Navbar.styles";
import SearchIcon from "../../assets/SearchIcon";
import ThemeIcon from "../../assets/ThemeIcon";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLeftSide>
            <NavLink to="/CoinPage" activeStyle>
              CoinPage
            </NavLink>
            <NavLink to="/Portfolio" activeStyle>
              Portfolio
            </NavLink>
          </NavLeftSide>
          <NavRightSide>
            <SearchContainer>
              <SearchForm>
                <SearchIcon />
                <SearchInput type="text" placeholder="Search..." />
              </SearchForm>
            </SearchContainer>
            <CarencyExchangeContainer></CarencyExchangeContainer>
            <ThemeIconContainer>
              <ThemeIcon />
            </ThemeIconContainer>
          </NavRightSide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
