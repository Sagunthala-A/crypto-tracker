import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import { IconButton } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
{/* <MenuRoundedIcon/> */}

export default function AnchorTemporaryDrawer() {
   const [open, setOpen] = useState(false);
   const style ={
    color:"var(--white)",
    backgroundColor:"none"
}
  return (
    <div className='drawer'>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="header__icon"  sx={style} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} >
        <div className="drawer-links">
            <Link className='header__links' to='/'>Home</Link>
            <Link className='header__links'>Compare</Link>
            <Link className='header__links'>Watchlist</Link>
            <Link className='header__links' to='/dashboard'>Dashboard</Link>
        </div>
      </Drawer>
    </div>
  );
}
