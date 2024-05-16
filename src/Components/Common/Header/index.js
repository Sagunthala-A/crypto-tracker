import React from 'react';
import './style.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Drawer from './Drawer'

function Header() {
  return (
    <div className='header'>
        <h1>CryptoTracker<span>.</span></h1>
        <div className='header__left'>
            <button>toggle </button>
            <Link className='header__links' to='/'>Home</Link>
            <Link className='header__links'>Compare</Link>
            <Link className='header__links'>Watchlist</Link>
            <Link className='header__links' to='/dashboard'>
                <Button
                    text={"Dashboard"}
                    outlined = {false}
                />
            </Link>
        </div>
        <div className='header__drawer'>
          <Drawer/>
        </div>
    </div>
  )
}

export default Header;