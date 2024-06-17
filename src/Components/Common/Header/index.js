import React, { useEffect, useState } from 'react';
import './style.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Drawer from './Drawer'
import { Switch } from '@mui/material';
import { toast } from 'react-toastify';

function Header() {
    const [darkMode, setDarkMode] = useState(
      localStorage.getItem("theme") == "dark" ? true : false
    )

    useEffect(() => {
      if (localStorage.getItem("theme") == "dark") {
        setDark();
      } else {
        setLight();
      }
    }, [])

    const changeMode = () => {
      if (localStorage.getItem("theme") != "dark") {
        setDark();
      } else {
        setLight();
      }
      setDarkMode(!darkMode);
      toast.success("Theme Changed!");
    }

    const setDark = () => {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const setLight = () => {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }

  return (
    <div className="header">
      <h1>
        CryptoTracker<span>.</span>
      </h1>
      <div className="header__left">
        <Switch checked={darkMode} onClick={() => changeMode()} />
        <Link className="header__links" to="/">
          Home
        </Link>
        <Link className="header__links" to="/compare">
          Compare
        </Link>
        <Link className="header__links" to="/watchlist">
          Watchlist
        </Link>
        <Link className="header__links" to="/dashboard">
          <Button text={"Dashboard"} outlined={false} linkTo={"/dashboard"} />
        </Link>
      </div>
      <div className="header__drawer">
        <Drawer />
      </div>
    </div>
  );
}

export default Header;