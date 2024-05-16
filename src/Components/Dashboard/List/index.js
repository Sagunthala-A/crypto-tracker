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
        <Tooltip title={`${coin.name}-image`} placement="bottom-start">
          <img className="" src={coin.image} alt={`${coin.name}_logo`} />
        </Tooltip>
      </td>
      <Tooltip title="Coin-info" placement="bottom">
        <td className="td__logoName">
          <div className="td__logoNameInfo">
            <h4>{coin.symbol}</h4>
            <p>{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="Price" placement="bottom">
        <td>
          <div className="td__chip__flex">
            <div
              className={
                coin.price_change_percentage_24h >= 0
                  ? "price__chip td__priceChip"
                  : "price__chip td__priceChip redChip"
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
      </Tooltip>
      <Tooltip title="Current" placement="bottom-start">
        <td
          className={
            coin.price_change_percentage_24h >= 0
              ? "td__coin__currentPrice"
              : "td__coin__currentPrice redCurrentPrice"
          }
        >
          <p className="td__coinCurrentPriceDesktop">
            ${coin.current_price.toLocaleString()}
          </p>

          <p className="td__coinCurrentPriceMobile">
            ${convertNumber(coin.current_price)}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Total Volume" placement="bottom-end">
        <td className="td__coin__valueContainer td__coinTotVol">
          {coin.total_volume.toLocaleString()}
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="td__coin__valueContainer">
          <span className="td__coinMarkCap">
            ${coin.market_cap.toLocaleString()}
          </span>
          <span className="td__coinMarkCapMobile">
            ${convertNumber(coin.market_cap)}
          </span>
        </td>
      </Tooltip>
      {/* <td className="star__bookmark">@%&*</td> */}
    </tr>
  );
  
}

export default List;
