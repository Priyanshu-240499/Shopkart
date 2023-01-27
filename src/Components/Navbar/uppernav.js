import React from 'react'
import "./upper.css";

import { FaCartArrowDown } from 'react-icons/fa'
import { AiOutlineLogout } from 'react-icons/ai'
import {Link} from "react-router-dom";
// import Typewrite from "typewriter-effect";
function Uppernav() {
  return (
    <div className='uppernav'>
      {/* {console.log("uppernav** render is called")} */}
      <Link to={{pathname:"/home"}} className='logo'><h2>SHOPIFY</h2></Link>
      <h2 className='greeting'>Priyanshu</h2>
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
