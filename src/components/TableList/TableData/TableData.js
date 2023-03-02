import React from "react";
import {
  priceFormat,
  percentageFormat,
  largeNumberFormat,
} from "../../../utils/numberFormat";
import { ArrowDown, ArrowUp } from "../../../utils/arrows";
import {
  TableDataElement,
  TableDataRow,
  CoinLink,
  ArrowsContainer,
  TableDataInenerContainer,
  DataTotalCoinWrapper,
  LargeNumberContainer,
  SliderBarContainer,
  SliderBar,
} from "./TableData.styled";
import { CryptoState } from "../../../CryptoContext";
import TableChart from "../TableChart/TableChart";
import { progressBarColors } from "../../../styles/progressBarColors";
import useWindowSize from "../../../utils/windowSize";

function TableData(props) {
  const { symbol } = CryptoState();
  const id = props.coins.market_cap_rank;

  const size = useWindowSize();

  const generateColors = (id) => {
    return Object.values(progressBarColors)[
      id % Object.keys(progressBarColors).length
    ];
  };
  return (
    <>
      <TableDataRow>
        <TableDataElement>{props.coins.market_cap_rank}</TableDataElement>
        <TableDataElement>
          <CoinLink to={`/coins/${props.coins.id}`}>
            <img src={props.coins.image} alt="coins" height={30} />
            <p>
              {props.coins.name} ({props.coins.symbol.toUpperCase()})
            </p>
          </CoinLink>
        </TableDataElement>

        <TableDataElement>
          {symbol}
          {priceFormat(props.coins.current_price)}
        </TableDataElement>
        {size.width > 350 && (
          <TableDataElement>
            <TableDataInenerContainer>
              <ArrowsContainer>
                {props.coins.price_change_percentage_1h_in_currency <= 0.001 ? (
                  <ArrowDown />
                ) : (
                  <ArrowUp />
                )}
              </ArrowsContainer>
              <p>
                {percentageFormat(
                  props.coins.price_change_percentage_1h_in_currency
                )}
              </p>
            </TableDataInenerContainer>
          </TableDataElement>
        )}
        {size.width > 460 && (
          <TableDataElement>
            <TableDataInenerContainer>
              <ArrowsContainer>
                {props.coins.price_change_percentage_24h_in_currency <= 0 ? (
                  <ArrowDown />
                ) : (
                  <ArrowUp />
                )}
              </ArrowsContainer>
              <p>
                {percentageFormat(
                  props.coins.price_change_percentage_24h_in_currency
                )}
              </p>
            </TableDataInenerContainer>
          </TableDataElement>
        )}
        {size.width > 540 && (
          <TableDataElement>
            <TableDataInenerContainer>
              <ArrowsContainer>
                {props.coins.price_change_percentage_7d_in_currency <= 0 ? (
                  <ArrowDown />
                ) : (
                  <ArrowUp />
                )}
              </ArrowsContainer>
              <p>
                {percentageFormat(
                  props.coins.price_change_percentage_7d_in_currency
                )}
              </p>
            </TableDataInenerContainer>
          </TableDataElement>
        )}
        {size.width > 740 && (
          <TableDataElement>
            <DataTotalCoinWrapper>
              <LargeNumberContainer>
                <p style={{ color: `${generateColors(id).color2}` }}>
                  {largeNumberFormat(props.coins.total_volume).toUpperCase()}
                </p>
                <p style={{ color: `${generateColors(id).color1}` }}>
                  {largeNumberFormat(props.coins.market_cap).toUpperCase()}
                </p>
              </LargeNumberContainer>
              <SliderBarContainer firstColor={`${generateColors(id).color1}`}>
                <SliderBar
                  secondColor={`${generateColors(id).color2}`}
                  width={
                    (props.coins.total_volume / props.coins.market_cap) * 100
                  }
                ></SliderBar>
              </SliderBarContainer>
            </DataTotalCoinWrapper>
          </TableDataElement>
        )}
        {size.width > 900 && (
          <TableDataElement>
            <DataTotalCoinWrapper>
              <LargeNumberContainer>
                <p style={{ color: `${generateColors(id).color2}` }}>
                  {largeNumberFormat(
                    props.coins.circulating_supply
                  ).toUpperCase()}
                </p>
                <p style={{ color: `${generateColors(id).color1}` }}>
                  {largeNumberFormat(props.coins.total_supply).toUpperCase()}
                </p>
              </LargeNumberContainer>

              <SliderBarContainer firstColor={`${generateColors(id).color1}`}>
                <SliderBar
                  secondColor={`${generateColors(id).color2}`}
                  width={
                    (props.coins.circulating_supply /
                      props.coins.total_supply) *
                    100
                  }
                ></SliderBar>
              </SliderBarContainer>
            </DataTotalCoinWrapper>
          </TableDataElement>
        )}
        {size.width > 1000 && (
          <TableDataElement>
            <TableChart chartPrices={props.coins.sparkline_in_7d.price} />
          </TableDataElement>
        )}
      </TableDataRow>
    </>
  );
}

export default TableData;
