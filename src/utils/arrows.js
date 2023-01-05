import styled from "styled-components";

export const ArrowUp = styled.div`
  width: 0;
  height: 0px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom:4px solid rgb(0, 252, 42);;
  margin-bottom: 2px: 
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgb(254, 16, 64);
  margin-top: 2px;
`;

export const Dot = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: ${(props) => props.theme.textColor};
`;
