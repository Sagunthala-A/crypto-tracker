import React from 'react';
import './style.css';

function Button({text,outlined}) {
  return (
    <div className= {outlined ? "outlined__btn":"normal__btn"}>
        {text}
    </div>
  )
}

export default Button;