import React from 'react'
import { FaSearch } from 'react-icons/fa';
import "./lowerSearch.css";
import { useSelector, useDispatch } from "react-redux";
function LowerSearch() {
  const dispatch = useDispatch();
  const Constantdata = useSelector((state) => state.ConstAllData);

  function handleOnChange(e) {
    const findproducts = Constantdata.filter((item) => {
      return item.title.toUpperCase().includes(e.target.value.toUpperCase());
    });
     if(findproducts.length===0){
      dispatch({ type: "filteredData", payload: "No Result" });
     }else{
      dispatch({ type: "filteredData", payload: findproducts });
     }
    
  }

  return (
    <div className='inp'>
        <input type="text" placeholder='Search' onChange={(e) => handleOnChange(e)}/>
        <button>{<FaSearch/>}</button>
      </div>
  )
}

export default LowerSearch
