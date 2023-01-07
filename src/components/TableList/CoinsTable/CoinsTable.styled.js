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
