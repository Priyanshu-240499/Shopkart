import React from 'react'
import { FaSearch } from 'react-icons/fa';
import "./lowerSearch.css";
function LowerSearch() {
  return (
    <div className='inp'>
        <input type="text" placeholder='Search'/>
        <button>{<FaSearch/>}</button>
      </div>
  )
}

export default LowerSearch
