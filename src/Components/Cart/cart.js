import React, {useEffect} from 'react'

function Cart() {
    useEffect(()=>{
        fetch('https://fakestoreapi.com/carts/user/1')
        .then(res=>res.json())
        .then(json=>console.log(json))
    },[])
  return (
    <div>
      hi
    </div>
  )
}

export default Cart
