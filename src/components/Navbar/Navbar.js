import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  MobileMenu,
} from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../../utils/windowSize";
import NavBarData from "./NavBarData/NavBarData";
import SearchBar from "./SearchBar/SearchBar";
import ThemeIcon from "../../assets/ThemeIcon";
import { CryptoState } from "../../CryptoContext";

const Navbar = (props) => {
  const { currency, setCurrency, symbol } = CryptoState();
  const [currencyList, setCurrencyList] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const size = useWindowSize();

  const handleCurrencyList = () => {
    setCurrencyList(!currencyList);
  };

  const closeCoinList = () => {
    setCurrencyList(false);
  };

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <NavBarContainer>
        <Nav>
          <NavbarContainer>
            {size.width > 680 && (
              <NavLeftSide>
                <NavLink to="/">CoinPage</NavLink>
                <NavLink to="/Portfolio">Portfolio</NavLink>
              </NavLeftSide>
            )}
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
              </DropdownContainer>
              {size.width <= 680 && (
                <MobileMenu>
                  <div>
                    <FontAwesomeIcon
                      onClick={handleMobileMenu}
                      icon={faBars}
                      className="hamburger-icon"
                    />
                  </div>

                  {mobileMenu && (
                    <ul>
                      <Link to="/">Coins</Link>
                      <Link to="/Portfolio">Portfolio</Link>
                    </ul>
                  )}
                </MobileMenu>
              )}
              {size.width > 680 && (
                <ThemeIconContainer onClick={props.toggleTheme}>
                  <ThemeIcon />
                </ThemeIconContainer>
              )}
            </NavRightSide>
          </NavbarContainer>
        </Nav>
        <NavBarData />
      </NavBarContainer>
    </>
  );
};

export default Navbar;
