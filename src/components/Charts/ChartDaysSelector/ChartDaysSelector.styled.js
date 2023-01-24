import styled from "styled-components";

export const ChartDaysContainer = styled.div`
  background: ${(props) => props.theme.insideColor};
  width: 50%;
  margin: auto;
  border-radius: 20px;
  @media (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ChartDayslist = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  @media (max-width: 400px) {
    justify-content: space-between;
  }
`;
export const ChartDaysButtons = styled.button`
  background: ${(props) =>
    props.selected ? "#dbc473;" : props.theme.navInside};
  color: ${(props) => (props.selected ? "#000" : props.theme.textColor)};
  cursor: pointer;
  padding: 7px 15px;
  border-radius: 20px;
  border: none;
  font-size: 1rem;

  @media (max-width: 400px) {
    padding: 5px 15px;
  }
`;
