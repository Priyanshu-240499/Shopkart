import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Categorycard from './categorycard';
import {useNavigate} from "react-router-dom";
import "./category.css";
import Nav from '../Navbar/nav';
function Category() {
  const productnavigate=useNavigate();
   const selectedCategory=useParams().category;
   const [categorydata,setCategryData]=useState([]);
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(json=>setCategryData(json))
   },[categorydata])

  return (
    <>
    <Nav/>
    <div className='Category'>
    {categorydata.length===0?<h1>Loading...</h1>:categorydata.map(item=><div className='category-link' onClick={()=>{ productnavigate(`/product/${item.id}`)}} key={item.id}><Categorycard  data={item}/></div>)}
    </div>
    </>
  )
}

export default Category;
