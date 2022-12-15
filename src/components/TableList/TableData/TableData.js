import React from "react";
import { priceFormat } from "../../../utils/numberFormat";
import { TableDataElement, TableDataRow, CoinLink } from "./TableData.styled";

function TableData(props) {
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
          {priceFormat(props.coins.current_price)}
        </TableDataElement>
        <TableDataElement>
          {props.coins.price_change_percentage_1h_in_currency}
        </TableDataElement>
        <TableDataElement>
          {props.coins.price_change_percentage_24h_in_currency}
        </TableDataElement>
        <TableDataElement>
          {props.coins.price_change_percentage_7d_in_currency}
        </TableDataElement>
        <TableDataElement>{props.coins.market_cap_rank}</TableDataElement>
        <TableDataElement>{props.coins.market_cap_rank}</TableDataElement>
        <TableDataElement>{props.coins.market_cap_rank}</TableDataElement>
      </TableDataRow>
    </>
  );
}

export default TableData;
