import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 200px;
  padding: 10.13px 0px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.navInside};

  @media (max-width: 400px) {
    width: 50%;
  }
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

export const CoinResultWrapper = styled.ul`
  position: absolute;
  border: none;
  background: ${(props) => props.theme.insideColor};
  list-style-type: none;
  border-radius: 6px;
  width: 200px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 999;
  top: 50px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #06d554;
    outline: 1px solid #06d554;
    border-radius: 4px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;
