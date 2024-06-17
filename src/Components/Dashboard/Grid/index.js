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
import { motion } from "framer-motion";

function Grid({ coin, setWatch, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
  //  const [watch, setWatch] = useState(
  //    JSON.parse(localStorage.getItem("watchlist")) || []
  //  );
  // const [added, setAdded] = useState(watch?.includes(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
      {coin.price_change_percentage_24h >= 0 ? (
        <motion.div
          className="grid__container "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay}}
        >
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
                if (isCoinAdded) {
                  // setIsCoinAdded(false);
                  removeFromWatchlist(e, coin.id, setIsCoinAdded, setWatch);
                } else {
                  setIsCoinAdded(true);
                  addToWatchlist(e, coin.id);
                }
              }}
              // onClick={(e) => {
              //   e.preventDefault();
              //   if (added) {
              //     setAdded(false);
              //     removeFromWatchlist(e, coin.id, setAdded, setWatch);
              //   } else {
              //     setAdded(true);
              //     addToWatchlist(e, coin.id, setWatch);
              //   }
              // }}
            >
              {isCoinAdded ? (
                <StarRoundedIcon
                  className={`watchlist-icon `}
                  sx={{ fontSize: "2rem !important" }}
                />
              ) : (
                <StarBorderRoundedIcon
                  className={`watchlist-icon `}
                  sx={{ fontSize: "2rem !important" }}
                />
              )}

              {/* {added ? (
                <StarRoundedIcon
                  className={`watchlist-icon `}
                  sx={{ fontSize: "2rem !important" }}
                />
              ) : (
                <StarBorderRoundedIcon
                  className={`watchlist-icon `}
                  sx={{ fontSize: "2rem !important" }}
                />
              )} */}
            </IconButton>
          </div>
          <div className="chip__flex">
            <p className="price__chip">
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
        </motion.div>
      ) : (
        <motion.div
          className="grid__container redGrid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay}}
        >
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
                if (isCoinAdded) {
                  // setIsCoinAdded(false);
                  removeFromWatchlist(e, coin.id, setIsCoinAdded, setWatch);
                } else {
                  setIsCoinAdded(true);
                  addToWatchlist(e, coin.id);
                }
              }}
            >
              {isCoinAdded ? (
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
        </motion.div>
      )}
    </Link>
  );
}

export default Grid;


