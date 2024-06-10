import React, { useState } from 'react';
import './style.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { removeFromWatchlist } from '../../../Functions/removeFromWatchlist';
import { addToWatchlist } from '../../../Functions/addtoWatchlist';

function Grid({coin}) {
  const [added, setAdded] = useState(true);
  return (
    <Link to={`/coin/${coin.id}`}>
      {coin.price_change_percentage_24h >= 0 ? (
        <div className="grid__container ">
          <div className="grid__logo">
            <div className="gridLogo__imgName">
              <img src={coin.image} alt={`${coin.name}_logo`} />
              <div className="grid__logoName">
                <h4>{coin.symbol}</h4>
                <p>{coin.name}</p>
              </div>
            </div>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                if (added) {
                  removeFromWatchlist(coin.id);
                  setAdded(false);
                } else {
                  addToWatchlist(coin.id);
                  setAdded(true);
                }
              }}
            >
              {added ? (
                <StarRoundedIcon
                  className={`watchlist-icon star`}
                  sx={{ fontSize: "2rem !important" }}
                />
              ) : (
                <StarBorderRoundedIcon
                  className={`watchlist-icon star`}
                  sx={{ fontSize: "2rem !important" }}
                />
              )}
            </IconButton>
          </div>
          <div className="chip__flex">
            <p className="price__chip">
              {" "}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <div className="icon__chip">
              <TrendingUpRoundedIcon className="" />
            </div>
          </div>

          <div className="coin__currentPrice">
            <p>${coin.current_price.toLocaleString()}</p>
          </div>
          <div className="coin__valueContainer">
            <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
            <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
          </div>
        </div>
      ) : (
        <div className="grid__container redGrid">
          <div className="grid__logo">
            <div className="gridLogo__imgName">
              <img src={coin.image} alt={`${coin.name}_logo`} />
              <div className="grid__logoName">
                <h4>{coin.symbol}</h4>
                <p>{coin.name}</p>
              </div>
            </div>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                if (added) {
                  removeFromWatchlist(coin.id);
                  setAdded(false);
                } else {
                  addToWatchlist(coin.id);
                  setAdded(true);
                }
              }}
            >
              {added ? (
                <StarRoundedIcon
                  className={`watchlist-icon watchlist-icon-red`}
                  sx={{ fontSize: "2rem !important" }}
                />
              ) : (
                <StarBorderRoundedIcon
                  className={`watchlist-icon watchlist-icon-red`}
                  sx={{ fontSize: "2rem !important" }}
                />
              )}
            </IconButton>
          </div>
          <div className="chip__flex ">
            <p className="price__chip redChip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <div className="icon__chip redChip">
              <TrendingDownRoundedIcon />
            </div>
          </div>

          <div className="coin__currentPrice redCurrentPrice">
            <p>${coin.current_price.toLocaleString()}</p>
          </div>
          <div className="coin__valueContainer">
            <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
            <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
          </div>
        </div>
      )}
    </Link>
  );
}

export default Grid;