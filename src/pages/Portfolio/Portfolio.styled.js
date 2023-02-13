import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1920px;
  margin: auto;
  margin-bottom: 5em;
  padding: 0 1em;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1rem;
  text-align: start;
  margin-top: 2em;
`;

export const Button = styled.button.attrs({
  type: "button",
})`
  background: #06d554;
  color: ${(props) => props.theme.textColor};
  box-shadow: none;
  border: none;
  border-radius: 12px;
  padding: 1.5em 0;
  width: 95%;
  max-width: 380px;
`;

export const PageHead = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AssetsListContainer = styled.div`
  width: 100%;
`;
