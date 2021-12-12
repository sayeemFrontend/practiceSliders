import React from 'react'
import classes from './search.module.css'
import search from "./../../assets/Icon/search.svg"
const Search = ({ placeholder, icon }) => {
   return (
      <div className={classes.searchBar + " d-flex align-items-center"}>
         <input type="text" placeholder={placeholder && placeholder} />
         {icon && <img src={search} alt="search" />}
      </div>
   )
}

export default Search
