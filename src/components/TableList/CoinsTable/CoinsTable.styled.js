import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: ${(props) => props.theme.insideColor};
  border-radius: 10px;
  margin: auto;
  width: 90%;
  padding: 10px;
`;

export const DataTableContainer = styled.table`
  width: 100%;
  border-top: 1px solid red;
  margin-top: 0;
  padding: 20px;
  height: 100px;
`;

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr``;

export const TableHeadData = styled.th``;

export const TableBody = styled.tbody`
  width: 100%;
  text-align: left;
`;
