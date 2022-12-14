import React from "react";
import { TableDataElement } from "./TableData.styled";

function TableData(props) {
  return (
    <>
      <tr>
        <TableDataElement>{props.coins.market_cap_rank}</TableDataElement>
        <TableDataElement>
          {props.coins.name} ({props.coins.symbol})
        </TableDataElement>
        <TableDataElement>{props.coins.current_price}</TableDataElement>
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
      </tr>
    </>
  );
}

export default TableData;
