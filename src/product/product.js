import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Categorycard from '../Components/Category/categorycard';
function Product() {
    const productId=useParams().id;
    const[productData,setProductData]=useState([]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProductData(json))
    },[productData])
  return (
    <div className='Category'>
    {productData.length===0?<h1>Loading...</h1>:<Categorycard key={productData.id} data={productData}/>}
    </div>
  )
}

export default Product
