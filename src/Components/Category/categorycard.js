import React from 'react'
// const cartdata=[];
function Categorycard({data:{image,title,category,description
,price,rating,id}}) {
  function hanleOnClick(e){
    fetch('https://fakestoreapi.com/carts',{
      method:"POST",
      body:JSON.stringify(
          {
              userId:1,
              date:new Date(),
              products:[{productId:{id},quantity:1}]
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))

  e.stopPropagation();
  }
  return (

      <div  className='Category-sub'>
        {console.log("categorycard** render is called")}
        <div  className='img'><img loading='lazy' src={image} alt={id} width="200px" height="300px"/><strong>Category: {category}</strong></div>
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
