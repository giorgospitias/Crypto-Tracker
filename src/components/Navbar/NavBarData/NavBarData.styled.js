import styled from "styled-components";

export const NavbarDataContainer = styled.div`
  margin: 0 auto 30px;
  width: 50%;
  padding: 15px 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px 0px 20px 20px;
  background-color: ${(props) => props.theme.insideColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 20px;

  @media (max-width: 650px) {
    width: 70%;
  }
  @media (max-width: 471px) {
    width: 50%;
    padding: 10px 5px;
  }
  @media (max-width: 400px) {
    width: 60%;
  }
  @media (max-width: 350px) {
    width: 70%;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerText = styled.p`
  margin: 0 8px;
`;

export const LogoIcon = styled.img`
  height: 15px;
`;

export const SliderBarContainer = styled.div`
  background-color: #2751ea;
  height: 6px;
  width: 40px;
  border-radius: 10px;
`;

export const SliderBar = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.textColor};
`;
