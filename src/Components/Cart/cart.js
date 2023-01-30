import React from "react";
import {motion} from 'framer-motion/dist/framer-motion'
import EmptyCart from "./emptyCart";
import { AiFillDelete } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'
import "./cart.css";
import "./productlist.css";
import {useSelector,useDispatch} from "react-redux";
// Starting here...........................................
function Cart() {
  const cartData = useSelector((state)=>state.CartData); 
  const dispatch=useDispatch();

  // Deleting row from cart 
  function handleDelete(index) {
    const cart=cartData.filter((item,ind)=> ind!==index)
    dispatch({type:"AddedData", payload:cart})
  }

// showing Order Placed after click to order button 
  function handleOnClick(){
    dispatch({type:"AddedData", payload:[{price:0}]})
  }
  

    const totalBill=cartData.reduce((acc,curr)=>{
      acc+=curr.price;
      return acc;
    },0)
  
  

  return (
    <>
      {cartData.length === 0 ? (
        <EmptyCart currentstring="Your Cart is Empty"/>
      ) : (cartData[0].price===0?<EmptyCart currentstring="Hurray Order Placed"/>:<div className="cart"> 
      <h1 className="cart-summary">SUMMARY</h1>
      {cartData.map((item,ind)=>{ 
          return (
          <div key={item.id*ind} className="Products">
            <div>
              <img
                src={item.image}
                alt="cart-product"
                width="55"
                height="60"
              />
            </div>
            <div>{item.title}</div>
            <strong className="cart-price">
              <BiRupee /> {item.price}
            </strong>
            <div className="delete-cart">
              <button onClick={() => handleDelete(ind)}>
                <AiFillDelete />
              </button>
            </div>
          </div>)
      })}
      <motion.div initial={{ opacity: 0, x:20 }} animate={{opacity: 1, x: 0}} transition={{ duration: 1}} className="total-summary">
          <h2>Total:</h2>
          <h2>{Math.ceil(totalBill)}</h2>
          <button onClick={()=>handleOnClick()} className="order-button">Place Order</button>
      </motion.div>
      </div> )
           
      }
    </>
  );
}

export default Cart;
