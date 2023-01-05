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
  NavBarContainer,
} from "./Navbar.styled";
import NavBarData from "../NavBarData/NavBarData";
import SearchIcon from "../../assets/SearchIcon";
import ThemeIcon from "../../assets/ThemeIcon";
import { CryptoState } from "../../CryptoContext";

const Navbar = (props) => {
  const { currency, setCurrency, symbol } = CryptoState();

  return (
    <>
      <NavBarContainer>
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
                  <p>{symbol}</p>
                </span>
                <DropdownCurrency>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
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
        <NavBarData />
      </NavBarContainer>
    </>
  );
};

export default Navbar;
