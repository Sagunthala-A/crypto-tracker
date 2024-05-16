import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { easeIn } from "framer-motion";

function Search({search,onSearchChange}) {
  return (
    <div className="search__wrapper">
      <SearchRoundedIcon/>
      <input 
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e)=>{onSearchChange(e)}}
      />
    </div>
  );
}

export default Search;
