import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Starting ...........................
function Categorycard({data}) {
  const cartData=useSelector((state)=>state.CartData)
  const dispatch=useDispatch();

  // function to add data to cartData in cart...........
  function hanleOnClick(e) {
    dispatch({type:"AddedData", payload:[...cartData,data]})
    alert("Added");
    e.stopPropagation();
  }

  return (
    <div className="Category-sub">
      <div className="img">
        <img loading="lazy" src={data.image} alt={data.id} width="200px" height="300px" />
        <strong>Category: {data.category}</strong>
      </div>
      <div className="title">
        <div>
          <h2>{data.title}</h2>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div className="price">
          <p>Price: {data.price} Rs.</p>
        </div>
        <div className="rating">
          <h3 style={{ color: data.rating.rate >= 3.5 ? "green" : "red" }}>
            Rating: {data.rating.rate}/{data.rating.count} customers
          </h3>
        </div>
        <div className="add-to-cart" onClick={hanleOnClick}>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Categorycard;
