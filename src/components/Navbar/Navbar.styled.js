import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.main};
  height: 60px;
  padding: 10px 0px;
  width: 100%;
}
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
    color:${(props) => props.theme.textColor};
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
      background-color: ${(props) => props.theme.main};
    }
  }
`;

export const NavRightSide = styled.div`
  display: flex;
`;

export const SearchContainer = styled.div`
  width: 200px;
  padding: 10.13px 0px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.main};
`;

export const SearchForm = styled.form`
  display: flex;
  alighn-items: center;
  margin-left: 5px;
`;

export const SearchInput = styled.input`
padding: 0px 10px;
font-size: 14px;
color: ${(props) => props.theme.textColor};
background-color: transparent;
outline: none;
border: none;
width: 100%;
height: 100%;
}
`;

export const DropdownContainer = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin: 0 15px;
  padding-left: 3px;
  background: ${(props) => props.theme.main};

  select {
    font-size: 12px;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.main};
    border: 1px solid;
    border-color: ${(props) => props.theme.main};
    cursor: pointer;
    appearance: none;

    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"><polygon points="0,0 100,0 50,50" style="fill:%2300fc2a;" /></svg>');
    background-position: right 10px top 50%;
    background-repeat: no-repeat;
    background-size: 6px;
    padding-right: 20px;
    &:focus {
      outline: none;
    }
  }

  option {
    font-size: 15px;
  }

  span {
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
  }
`;

export const DropdownCurrency = styled.div`
  display: flex;
  width: 26px;
  margin-left: 6px;
`;

export const ThemeIconContainer = styled.div`
  width: 50px;
  padding: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.main};
`;
