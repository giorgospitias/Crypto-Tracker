import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  z-index: 1;
  height: 40px;
  width: 100%;
  background: #ff9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.div`
display: flex;
background:  rgb(25, 27, 31);
justify-content: space-between;
width:95%;
height: 20px;

  }
`;

export const NavLeftSide = styled.div`
  background: #ff2;
  display: flex;
`;

export const NavRightSide = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
