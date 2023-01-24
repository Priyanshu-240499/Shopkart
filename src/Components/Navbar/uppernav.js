import React from 'react'
import "./upper.css";
import { FaSearch } from 'react-icons/fa'
import {Link} from "react-router-dom";
function Uppernav() {
  return (
    <div className='uppernav'>
      <Link to={{pathname:"/home"}} className='logo'><h2>SHOPIFY</h2></Link>
      <div className='inp'>
        <input type="text" placeholder='Search'/>
        <button>{<FaSearch/>}</button>
      </div>
      <div className='cart'>
        <button >cart</button>
      </div>

    </div>
  )
}

export default Uppernav;
