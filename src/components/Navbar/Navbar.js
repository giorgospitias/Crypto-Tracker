import React from "react";

import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLeftSide,
  NavRightSide,
  SearchContainer,
  ThemeIconContainer,
  SearchInput,
  SearchForm,
  DropdownContainer,
  DropdownCurrency,
} from "./Navbar.styles";
import getCurrencySymbol from "../../utils/getCurrencySymbol";
import SearchIcon from "../../assets/SearchIcon";
import ThemeIcon from "../../assets/ThemeIcon";

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLeftSide>
            <NavLink to="/">CoinPage</NavLink>
            <NavLink to="/Portfolio">Portfolio</NavLink>
          </NavLeftSide>
          <NavRightSide>
            <SearchContainer>
              <SearchForm>
                <SearchIcon />
                <SearchInput type="text" placeholder="Search..." />
              </SearchForm>
            </SearchContainer>
            <DropdownContainer>
              <span>
                <p>$</p>
              </span>
              <DropdownCurrency>
                <select>
                  <option value={"usd"}>USD</option>
                  <option value={"eur"}>EUR</option>
                  <option value={"btc"}>BTC</option>
                  <option value={"eth"}>ETH</option>
                  <option value={"gbp"}>GBP</option>
                </select>
              </DropdownCurrency>
            </DropdownContainer>
            <ThemeIconContainer onClick={props.toggleTheme}>
              <ThemeIcon />
            </ThemeIconContainer>
          </NavRightSide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
