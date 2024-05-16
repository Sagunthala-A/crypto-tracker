import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { convertNumber } from "../../../Functions/convertNumber.js";

function List({ coin }) {
  return (
    <tr className="list__row">
      <td className="td__logo">
        <img className="" src={coin.image} alt={`${coin.name}_logo`} />
      </td>
      <td className="td__logoName">
        <div className="td__logoNameInfo">
          <h4>{coin.symbol}</h4>
          <p>{coin.name}</p>
        </div>
      </td>
      <td>
        <div className="td__chip__flex">
          <div
            className={
              coin.price_change_percentage_24h >= 0
                ? "price__chip"
                : "price__chip redChip"
            }
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={
              coin.price_change_percentage_24h >= 0
                ? "icon__chip"
                : "icon__chip redChip"
            }
          >
            {coin.price_change_percentage_24h >= 0 ? (
              <TrendingUpRoundedIcon />
            ) : (
              <TrendingDownRoundedIcon />
            )}
          </div>
        </div>
      </td>
      <td
        className={
          coin.price_change_percentage_24h >= 0
            ? "td__coin__currentPrice"
            : "td__coin__currentPrice redCurrentPrice"
        }
      >
        <p
          className="td__coinCurrentPriceDesktop"
          // onClick={() => {
          //   console.log(convertNumber(coin.current_price));
          // }}
        >
          ${coin.current_price.toLocaleString()}
        </p>
        <p className="td__coinCurrentPriceMobile">
          ${convertNumber(coin.current_price)}
        </p>
      </td>
      <td
        className="td__coin__valueContainer td__coinTotVol"
        // onClick={() => {
        //   console.log(convertNumber(coin.total_volume));
        // }}
      >
        {coin.total_volume.toLocaleString()}
      </td>
      <td
        className="td__coin__valueContainer"
        // onClick={() => {
        //   console.log(convertNumber(coin.market_cap));
        // }}
      >
        <span className="td__coinMarkCap">
          ${coin.market_cap.toLocaleString()}
        </span>
        <span className="td__coinMarkCapMobile">
          ${convertNumber(coin.market_cap)}
        </span>
      </td>
      {/* <td className="star__bookmark">@%&*</td> */}
    </tr>
  );
  
}

export default List;
