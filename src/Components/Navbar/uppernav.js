import React from 'react'
import "./upper.css";
import { AiFillHome } from 'react-icons/ai';
import { FaCartArrowDown } from 'react-icons/fa'
import { AiOutlineLogout } from 'react-icons/ai'
import {Link} from "react-router-dom";
function Uppernav() {
  return (
    <div className='uppernav'>
      {/* Brand logo.... */}
      <Link to={{pathname:"/home"}} className='logo'><h2><AiFillHome/></h2></Link>

      {/* name of user... */}
      <h2 className='greeting'>SHOPIFY</h2>

      {/* List to navigate to cart and logout form page... */}
      <ul className='nav-link'>
        <Link to={{pathname:"/mycart"}} className='cart'>
        <button ><FaCartArrowDown/></button>
      </Link>
        <Link to={{pathname:"/"}} className='logout'>
        <button ><AiOutlineLogout/></button>
      </Link>
      </ul>
    </div>
  )
}

export default Uppernav;
