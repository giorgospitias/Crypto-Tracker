import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DataTableContainer,
  TableBody,
  TableContainer,
  TableHead,
  TableHeadData,
  TableHeadRow,
  LoaderContainer,
  PageSelectorWrapper,
  PageSelector,
  SmallLeftNuetralArrow,
  SmallRightNuetralArrow,
  CoinTableRowText,
} from "./CoinsTable.styled";
import { Bars } from "react-loader-spinner";
import TableData from "../TableData/TableData";
import { CryptoState } from "../../../CryptoContext";

function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const { currency, setLoading, loading } = CryptoState();

  const handlePageClick = (direction) =>
    direction === "+1"
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  console.log(currentPage);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${itemsPerPage}&page=${currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((response) => {
        setCoins(response.data);
        setLoading(false);

        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency, currentPage]);

  return (
    <>
      <TableContainer>
        {loading ? (
          <LoaderContainer>
            <Bars
              height="70"
              width="70"
              color="rgb(0, 252, 42)"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </LoaderContainer>
        ) : (
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
        )}
      </TableContainer>
      <PageSelectorWrapper>
        <CoinTableRowText>Page:</CoinTableRowText>
        <PageSelector>
          <SmallLeftNuetralArrow onClick={() => handlePageClick("-1")} />
          {currentPage}
          <SmallRightNuetralArrow onClick={() => handlePageClick("+1")} />
        </PageSelector>
      </PageSelectorWrapper>
    </>
  );
}

export default CoinsTable;
