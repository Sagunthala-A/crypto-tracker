import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";

export default function SelectCoin({ coin1, coin2, allCoins, handleCoinChange }) {
  const selectStyle = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };
  return (
    <div sx={{ minWidth: 120 }} className="selectCoins__container">
      <label id="demo-simple-select-label-1">Crypto 1</label>
      <Select
        placement="right"
        labelId="demo-simple-select-label-1"
        value={coin1}
        label="Crypto-1"
        onChange={(e) => handleCoinChange(e, false)}
        sx={selectStyle}
      >
        {allCoins &&
          allCoins
            .filter((coin) => coin.id != coin2)
            .map((coin, index) => (
              <MenuItem key={index} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
            
      </Select>
      <label id="demo-simple-select-label-2">Crypto 2</label>
      <Select
        placement="right"
        sx={selectStyle}
        labelId="demo-simple-select-label-2"
        value={coin2}
        label="Crypto-2"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allCoins &&
          allCoins
            .filter((coin) => coin.id != coin1)
            .map((coin, index) => (
              <MenuItem key={index} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
      </Select>
    </div>
  );
}
