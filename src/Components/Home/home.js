import React,{useState,useEffect } from "react";
import Homecard from './homecard';
import "./home.css";
import Nav from "../Navbar/nav";
import Loading from "../Loading/loading";
// import Banner from "./banner";
import Lowernav from "../Navbar/Lowernav";
function Home(props) {
    const [alldata,setAlldata]=useState([]);
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setAlldata(json))
    },[])
  return (
    <>
     <Nav/>
    <Lowernav/>
    {console.log("home render is called")}
    <div className="home">
      <h1 className="home-title">All Products</h1>
      <div className="home-sub">
        {alldata.length===0?<Loading/>:alldata.map(item=><Homecard key={item.title} id={item.id} img={item.image} title={item.title}/>)}
        </div>
    </div>
    </>
  )
}

export default Home;

