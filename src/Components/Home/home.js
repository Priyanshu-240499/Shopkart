import React,{useState,useEffect } from "react";
import Homecard from './homecard';
import "./home.css";
function Home(props) {
    const [alldata,setAlldata]=useState([]);
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setAlldata(json))
    },[alldata])
  return (
    <div className="home">
      <div className="home-sub">
        {alldata.length===0?<h1>Loading data...</h1>:alldata.map(item=><Homecard key={item.title} id={item.id} img={item.image} title={item.title}/>)}
        </div>
    </div>
  )
}

export default Home;

