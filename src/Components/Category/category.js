import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Categorycard from './categorycard';
import {Link} from "react-router-dom";
import "./category.css";
function Category() {
   const selectedCategory=useParams().category;
   const [categorydata,setCategryData]=useState([]);
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(json=>setCategryData(json))
   },[categorydata])

  return (
    <div className='Category'>
    {categorydata.length===0?<h1>Loading...</h1>:categorydata.map(item=><Link className='category-link' to={{pathname:`/product/${item.id}`}} key={item.id}><Categorycard  data={item}/></Link>)}
    </div>
  )
}

export default Category;
