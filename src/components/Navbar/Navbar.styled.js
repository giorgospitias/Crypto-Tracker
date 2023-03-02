import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowUp } from "../../utils/arrows";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 0px;
  width: 100%;
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: ${(props) => props.theme.insideColor};
    padding: 10px ;
    width: 100%;

  }
`;

export const NavLeftSide = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  margin: 0px 10px;
  padding: 10px 0;
  width: 120px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &.active {
    background-color: ${(props) => props.theme.navInside};
  }
`;

export const NavRightSide = styled.div`
  display: flex;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 80px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin: 0 15px;
  padding-left: 3px;
  background: ${(props) => props.theme.navInside};
`;
export const SymbolWrapper = styled.div`
  display: flex;
`;

export const SymbolCyrcle = styled.span`
  margin-left: 5px;
  background: black;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 13px;
  color: limegreen;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
export const CurrencyWrapper = styled.div`
  margin-left: 6px;
  font-size: 15px;
`;
export const DropdownCurrencyWrapper = styled.div`
  position: absolute;
  top: 50px;
`;

export const DropdownCurrencyList = styled.ul`
  background-color: ${(props) => props.theme.insideColor};
`;

export const ArrowIcon = styled(ArrowUp)`
  #arrow {
    fill: #06d554;
  }
`;

export const ArrowIconContainer = styled.span`
  transform: ${(props) => (props.isOpen ? "rotateX(180deg)" : "none")};
  transform-origin: center;
  display: flex;
  margin-left: 6px;
  cursor: pointer;
  svg {
    margin: auto;
  }
`;

export const ThemeIconContainer = styled.div`
  width: 50px;
  padding: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.navInside};
`;

export const MobileMenu = styled.div`
  position: absolute;
  left: 90%;
  top: 30%;

  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 10%;
    z-index: 1;
    padding: 5px 0;
    background: ${(props) => props.theme.insideColor};
    text-decoration: none;

    a,
    li {
      color: ${(props) => props.theme.textColor};
      cursor: pointer;
      text-decoration: none;
      padding: 7px 15px;

      &:hover {
        background: ${(props) => props.theme.navInside};
      }
    }
  }
  .hamburger-icon {
    font-size: 1.5rem;
    transition: 0.3s color ease;

    &:hover {
      color: limegreen;
    }

    ul {
      top: 150%;
      left: -310%;
    }
  }
`;
