import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Categorycard from './categorycard';
import {useNavigate} from "react-router-dom";
import "./category.css";
import Uppernav from '../Navbar/uppernav';
import Lowernav from '../Navbar/Lowernav';
import Loading from '../Loading/loading';
let allData=[];
// Starting here ...............................
function Category() {
  const productnavigate=useNavigate();
   const selectedCategory=useParams().category;
   const [categorydata,setCategryData]=useState([]);
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(json=>{allData=json;setCategryData(json)})
   },[selectedCategory])

  //  filtering data based on price....
   function datafilter(e) {
   const selectedfilter = e.target.value;
    switch (selectedfilter) {
      case "All":
        setCategryData(allData);
        return;
      case "0-100":
        console.log("true 0-100")
        const lessthan100 = allData.filter((item) => {
          return item.price < 100;
        });
        console.log(lessthan100);
        setCategryData(lessthan100);
        break;
      case "100-500":
        console.log("true 100-500")
        const h_to_fh = allData.filter((item) => {
          return item.price >= 100 && item.price <= 500;
        });
        setCategryData(h_to_fh);
        break;
      case "500+":
        const morethan500 = allData.filter((item) => {
          return item.price > 500;
        });
        setCategryData(morethan500);
        break;

      default:
        break;
    }
  }

  return (
    <> 
    {categorydata.length===0?<Loading/>:
    <>
    <Uppernav/>
    <Lowernav/>
    <div className='Category' >
    <div>
      <select defaultValue="All" onChange={datafilter}>
          <option>All</option>
          <option>0-100</option>
          <option>100-500</option>
          <option>500+</option>
        </select></div>
    {
    categorydata.map(item=><div onClick={(e)=>{ productnavigate(`/product/${item.id}`)}} className='category-link' key={item.id}><Categorycard  data={item}/></div>)
    }
    </div></>}
    
    </>
  )
}

export default Category;
