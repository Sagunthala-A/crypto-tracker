import React from 'react';
import './style.css';
import Button from '../Button';

function index() {
  return (
    <div className='header'>
        <h1>CryptoTracker<span>.</span></h1>
        <div className='header__left'>
            <button>toggle </button>
            <a href='#'>Home</a>
            <a href='#'>Compare</a>
            <a href='#'>Watchlist</a>
            <a href='#'>
                <Button
                    text={"Dashboard"}
                    outlined = {false}
                />
            </a>
        </div>
    </div>
  )
}

export default index;