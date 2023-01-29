import React from 'react'
// const cartdata=[];
function Categorycard({data:{image,title,category,description
,price,rating,id}}) {
  function hanleOnClick(e){
    fetch('https://sheet.best/api/sheets/882cbe2e-9fb7-4f3d-be5e-914412a24f68', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id:id,
    image:image,
    title:title,
    price:price
  }),
})
  .catch((error) => {
    console.log(error);
  });

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
