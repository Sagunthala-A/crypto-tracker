import React from 'react';
import './style.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

 function PriceTypeToggle({priceType,handlePriceTypeToggle}) {

  return (
    <div className='priceToggle__container'>
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeToggle}
        sx={{
          "& .Mui-selected": {
            color: "var(--blue) !important",
            backgroundColor: "#fff",
            backgroundColor: "rgba(25, 118, 210, 0.08) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices">Prices</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volumes</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default PriceTypeToggle;