import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Button({text,outlined,linkTo}) {
  return (
    <Link to={linkTo}>
      <div className={outlined ? "outlined__btn" : "normal__btn"}>
        {text}
      </div>
    </Link>
  );
}

export default Button;