import React from 'react'
import { Link } from "react-router-dom";
function LowerSub({src,name}) {
  
  return (
    <Link to={{pathname:`/category/${name}`}} className='nav-sub-card'>
      
    <img
            src={src}
            width="75"
            height="80"
            alt="electronics"
          />
    <p>{name}</p>
    </Link>
    
  )
}

export default LowerSub
