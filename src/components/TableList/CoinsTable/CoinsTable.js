import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DataTableContainer,
  TableBody,
  TableContainer,
  TableHead,
  TableHeadData,
  TableHeadRow,
} from "./CoinsTable.styled";
import TableData from "../TableData/TableData";
import { CryptoState } from "../../../CryptoContext";

function CoinsTable(props) {
  const [coins, setCoins] = useState([]);
  const { currency } = CryptoState();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);

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
            {coins.map((coins, id) => (
              <TableData coins={coins} key={id} />
            ))}
          </TableBody>
        </DataTableContainer>
      </TableContainer>
    </>
  );
}

export default CoinsTable;
