import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.div`
  position: relative;
  margin: 0 58px;
  padding: 0px 20px;
  background-color: ${(props) => props.theme.insideColor};
  border-radius: 20px;
  font-size: 11px;
  @media (max-width: 1100px) {
    margin: 0 25px;
  }
  @media (max-width: 600px) {
    margin: 0 15px;
  }
  @media (max-width: 355px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TableHeaderText = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 150%;
  @media (max-width: 900px) {
    font-size: 28px;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const TableHeaderTextSmall = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 10%;
  margin-left: 10px;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

export const DataTableContainer = styled.table`
  width: 100%;
  font-size: 12px;
  padding: 20px;
  height: 100px;
  text-align: left;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  height: 50px;
  border-bottom: solid 1px grey;
  font-size: 12px;
  font-weight: 500;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadData = styled.th``;

export const TableBody = styled.tbody`
  width: 100%;
  text-align: left;
`;

export const TableNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 10px;
  padding-top: 10px;
  @media (max-width: 355px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PageSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const PageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SmallLeftNuetralArrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  border-right: 4px solid ${(props) => props.theme.color};
  border-top: 4px solid transparent;
  :hover {
    cursor: pointer;
  }
`;
export const SmallRightNuetralArrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 4px solid transparent;
  border-left: 4px solid ${(props) => props.theme.textColor};
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;
  :hover {
    cursor: pointer;
  }
`;

export const CoinTableRowText = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 0;
  margin-left: 10px;
`;
