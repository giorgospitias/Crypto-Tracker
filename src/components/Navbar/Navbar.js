import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLeftSide,
  NavRightSide,
} from "./Navbar.styles";

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
            <NavLink to="/CoinPage" activeStyle>
              CoinPage
            </NavLink>
            <NavLink to="/Portfolio" activeStyle>
              Portfolio
            </NavLink>
          </NavRightSide>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
