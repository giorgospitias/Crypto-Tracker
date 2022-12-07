import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  height: 60px;
  background-color: rgb(25, 27, 31);
  padding: 10px;
  width: 100%;
}
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    height: 60px;
    background-color: rgb(25, 27, 31);
    padding: 10px;
    width: 100%;

  }
`;

export const NavLeftSide = styled.div`
  display: flex;
`;

export const NavRightSide = styled.div`
  display: flex;
`;

export const SearchContainer = styled.div`
  width: 200px;
  padding: 8.13px 0px;
  display: flex;
  justify-content: center;

  border-radius: 8px;
  background-color: rgb(44, 47, 54);
`;

export const SearchForm = styled.form`
  display: flex;
  alighn-items: center;
  margin-left: 5px;
`;

export const SearchInput = styled.input`
padding: 0px 10px;
font-size: 14px;
color: white;
background-color: transparent;
outline: none;
border: none;
width: 100%;
height: 100%;
}
`;

export const CarencyExchangeContainer = styled.div``;

export const ThemeIconContainer = styled.div`
  width: 50px;
  padding: 5px 0px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: rgb(44, 47, 54);
  margin: 0px 10px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  color: rgb(255, 255, 255);
    text-decoration: none;
    margin: 0px 10px;
    width: 120px;
    padding: 10px 0px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    
    &.active {
      background-color: rgb(44, 47, 54);
    }
  }
`;
