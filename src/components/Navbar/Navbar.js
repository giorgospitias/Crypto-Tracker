import React, { useState } from "react";
import CurrencyListItem from "./CurrencyListItem/CurrencyListItem";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLeftSide,
  NavRightSide,
  ThemeIconContainer,
  DropdownWrapper,
  DropdownContainer,
  DropdownCurrencyWrapper,
  DropdownCurrencyList,
  NavBarContainer,
  SymbolWrapper,
  SymbolCyrcle,
  CurrencyWrapper,
  ArrowIconContainer,
  ArrowIcon,
} from "./Navbar.styled";
import NavBarData from "./NavBarData/NavBarData";
import SearchBar from "./SearchBar/SearchBar";
import ThemeIcon from "../../assets/ThemeIcon";
import { CryptoState } from "../../CryptoContext";

const Navbar = (props) => {
  const { currency, setCurrency, symbol } = CryptoState();
  const [currencyList, setCurrencyList] = useState(false);

  const handleCurrencyList = () => {
    setCurrencyList(!currencyList);
  };

  const closeCoinList = () => {
    setCurrencyList(false);
  };

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
              <SearchBar />
              <DropdownContainer>
                <SymbolWrapper>
                  <SymbolCyrcle>
                    <p>{symbol}</p>
                  </SymbolCyrcle>
                </SymbolWrapper>
                <CurrencyWrapper>
                  <p>{currency.toUpperCase()}</p>
                </CurrencyWrapper>
                <ArrowIconContainer
                  isOpen={currencyList}
                  onClick={handleCurrencyList}
                >
                  <ArrowIcon />
                </ArrowIconContainer>
              </DropdownContainer>
              <DropdownCurrencyWrapper>
                {currencyList && (
                  <DropdownCurrencyList>
                    <CurrencyListItem
                      value="usd"
                      symbol="$"
                      code="USD"
                      closeCoinList={closeCoinList}
                    />
                    <CurrencyListItem
                      value="gbp"
                      symbol="£"
                      code="GBP"
                      closeCoinList={closeCoinList}
                    />
                    <CurrencyListItem
                      value="eur"
                      symbol="€"
                      code="EUR"
                      closeCoinList={closeCoinList}
                    />
                    <CurrencyListItem
                      value="btc"
                      symbol="₿"
                      code="BTC"
                      closeCoinList={closeCoinList}
                    />
                    <CurrencyListItem
                      value="eth"
                      symbol="Ξ"
                      code="ETH"
                      closeCoinList={closeCoinList}
                    />
                  </DropdownCurrencyList>
                )}
              </DropdownCurrencyWrapper>

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
