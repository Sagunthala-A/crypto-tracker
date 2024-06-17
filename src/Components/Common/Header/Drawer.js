import  React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import { IconButton, Switch } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { toast } from 'react-toastify';
{/* <MenuRoundedIcon/> */}

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const style = {
    color: "var(--white)",
    backgroundColor: "none",
  };
  // Default to dark mode if there is no theme in localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") == null
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme ) {
      handleDark();
    } else if (theme === "dark") {
      handleDark();
    } else {
      handleLight();
    }
  }, []);

  const changeMode = () => {
    if (darkMode) {
      handleLight();
    } else {
      handleDark();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const handleDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const handleLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <div className="drawer">
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="header__icon" sx={style} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-links">
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
            Dashboard
          </Link>
          <Switch checked={darkMode} onClick={() => changeMode()} />
        </div>
      </Drawer>
    </div>
  );
}
