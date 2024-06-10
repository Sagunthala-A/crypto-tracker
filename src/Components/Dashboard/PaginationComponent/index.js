import React, { useState } from 'react';
import './style.css';
import { Pagination } from '@mui/material';


function PaginationComponent({ page, handlePageChange }) {
  
  let style = {
    color: "var(--white)",
    "& .Mui-selected ": {
      backgroundColor: "var(--blue) !important",
      color: "#fff !important",
      borderColor: "var(--blue) !important",
    },
    "& .MuiPaginationItem-ellipsis": {
      border: "0px solid var(--grey) !important",
    },
    "& .MuiPaginationItem-text": {
      color: "var(--white)",
      border: "1px solid var(--grey)",
    },
  };

  return (
    <div className="pagination__container">
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={style}
      />
    </div>
  );
}

export default PaginationComponent;
