import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.div`
  background-color: ${(props) => props.theme.insideColor};
  border-radius: 10px;
  margin: auto;
  width: 80%;
  padding: 0px 20px;
`;

export const ChartHeaderText = styled.h1`
  font-size: 30px;
  font-weight: semi-bold;
  line-height: 10%;
  @media (max-width: 900px) {
    font-size: 28px;
  }
`;

export const DataTableContainer = styled.table`
  width: 100%;
  font-size: 12px;

  margin-top: 0;
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
  font-weight: regular;
  line-height: 0;
`;
