import React from 'react'

function Categorycard({data:{image,title,category,description
,price,rating,id}}) {
  function hanleOnClick(){
  alert("hi");
  }
  return (

      <div className='Category-sub'>
        <div className='img'><img loading='lazy' src={image} alt={id} width="200px" height="300px"/><strong>Category: {category}</strong></div>
        <div className='title'>
            <div><h2>{title}</h2></div>
            <div><p>{description}</p></div>
            <div className='price'><p>Price: {price} Rs.</p></div>
            <div className='rating'><h3 style={{color:rating.rate>=3.5?"green":"red"}}>Rating: {rating.rate}/{rating.count} customers</h3></div>
            <div className='add-to-cart' onClick={hanleOnClick}><button >Add to Cart</button></div>
        </div>
      </div>
    
  )
}

export default Categorycard;
