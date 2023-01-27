import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Categorycard from '../Components/Category/categorycard';
import Nav from '../Components/Navbar/nav';
import Loading from '../Components/Loading/loading';
import {motion} from 'framer-motion/dist/framer-motion'
function Product() {
    const productId=useParams().id;
    const[productData,setProductData]=useState([]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProductData(json))
    },[])
  return (
    <>
    {console.log("loading product component")}
    <Nav/>
    <motion.div className='Category' initial={{ opacity: 0, x:50 }} animate={{opacity: 1, x: 0}} transition={{ duration: 1}}>
    {productData.length===0?<Loading/>:<Categorycard key={productData.id} data={productData}/>}
    </motion.div>
    </>
  )
}

export default Product
