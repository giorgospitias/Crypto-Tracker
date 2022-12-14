import React from "react";
import {
  DataTableContainer,
  TableBody,
  TableContainer,
  TableHead,
  TableHeadData,
  TableHeadRow,
} from "./CoinsTable.styled";
import TableData from "../TableData/TableData";

function CoinsTable(props) {
  return (
    <>
      <TableContainer>
        <DataTableContainer>
          <TableHead>
            <TableHeadRow>
              <TableHeadData>#</TableHeadData>
              <TableHeadData>Name</TableHeadData>
              <TableHeadData>Price</TableHeadData>
              <TableHeadData>1h%</TableHeadData>
              <TableHeadData>24h%</TableHeadData>
              <TableHeadData>7d%</TableHeadData>
              <TableHeadData>24h Vol / Market Cap</TableHeadData>
              <TableHeadData>Circulating / Total Sup</TableHeadData>
              <TableHeadData>Last 7d</TableHeadData>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            {props.coins.map((coins, id) => (
              <TableData coins={coins} key={id} />
            ))}
          </TableBody>
        </DataTableContainer>
      </TableContainer>
    </>
  );
}

export default CoinsTable;
