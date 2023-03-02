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
  TableNavContainer,
  PageSelectorWrapper,
  PageSelector,
  SmallLeftNuetralArrow,
  SmallRightNuetralArrow,
  CoinTableRowText,
  TableHeaderText,
  TableHeaderTextSmall,
} from "./CoinsTable.styled";
import { Oval } from "react-loader-spinner";
import TableData from "../TableData/TableData";
import { CryptoState } from "../../../CryptoContext";
import CoinsPerPage from "../CoinsPerPage/CoinsPerPage";
import useWindowSize from "../../../utils/windowSize";

function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { currency, setLoading, loading, itemsPerPage } = CryptoState();

  const size = useWindowSize();

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
  }, [currency, currentPage, itemsPerPage, setLoading]);
  console.log(coins);

  return (
    <>
      <TableContainer>
        <TableNavContainer>
          <TableHeaderText>
            Top {itemsPerPage * currentPage}
            {size.width > 500 && (
              <TableHeaderTextSmall>by Market Cap</TableHeaderTextSmall>
            )}
          </TableHeaderText>
          <PageSelectorWrapper>
            <CoinTableRowText>SHOW:</CoinTableRowText>
            <CoinsPerPage />
            <CoinTableRowText>PAGE:</CoinTableRowText>
            <PageSelector>
              <SmallLeftNuetralArrow onClick={() => handlePageClick("-1")} />
              {currentPage}
              <SmallRightNuetralArrow onClick={() => handlePageClick("+1")} />
            </PageSelector>
          </PageSelectorWrapper>
        </TableNavContainer>
        {loading ? (
          <LoaderContainer>
            <Oval
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
                {size.width > 350 && <TableHeadData>1h%</TableHeadData>}
                {size.width > 460 && <TableHeadData>24h%</TableHeadData>}
                {size.width > 540 && <TableHeadData>7d%</TableHeadData>}
                {size.width > 740 && (
                  <TableHeadData>24h Vol / Market Cap</TableHeadData>
                )}
                {size.width > 900 && (
                  <TableHeadData>Circulating / Total Sup</TableHeadData>
                )}
                {size.width > 1000 && <TableHeadData>Last 7d</TableHeadData>}
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
    </>
  );
}

export default CoinsTable;
