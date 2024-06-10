import { CircularProgress } from '@mui/material'
import React from 'react';
import './style.css';

function Loader() {
  return (
    <div className='loader__container'>
      <CircularProgress style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default Loader