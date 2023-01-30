import React, { useEffect } from "react";
import Homecard from "./homecard";
import "./home.css";
import Nav from "../Navbar/nav";
import Loading from "../Loading/loading";
import { useSelector, useDispatch } from "react-redux";
import Lowernav from "../Navbar/Lowernav";
// Starting .............................
function Home() {
  
  const alldata = useSelector((state) => state.filteredData);
  const dispatch=useDispatch();
// Fetching from fakestore Api and storing in redux store (one constant data to filter on search ie ConstAllData)...................
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((json)=>{
      dispatch({ type: "filteredData", payload: json });
      dispatch({ type: "ConstAllData", payload: json });
    });
  },[]);

  return (
    <>
    <Nav/>
    {alldata.length === 0 ? <Loading /> : (alldata==="No Result"?<h1 className="noResults">No Results Found !</h1>:<>
    <Lowernav/>
    <div className="home">
      <h1 className="home-title">All Products</h1>
      <div className="home-sub">
        {alldata.map(item=><Homecard key={item.id}  img={item.image} id={item.id} title={item.title} />)}
      </div>
    </div>
    </>)
    }</>
  );
}

export default Home;
