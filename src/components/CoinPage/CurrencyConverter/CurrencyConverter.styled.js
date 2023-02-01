import styled from "styled-components";

export const ConvertContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ConvertInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const ConvertElements = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.navInside};
  border-radius: 8px;
  overflow: hidden;
  margin: 0 20px;
  @media (max-width: 1000px) {
    margin: 20px 0px;
  }
`;
export const ConvertImage = styled.img`
  margin: 0px 40px;
`;

export const Symbol = styled.h3`
  height: 100%;
  background-color: #00d93b;
  font-weight: bold;
  padding: 7px 10px;
`;

export const InputContainer = styled.div`
  padding-left: 10px;
  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
    padding: 0px 10px;
    padding-left: 0;
  }
`;
