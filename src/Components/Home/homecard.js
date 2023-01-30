import React from "react";
import "./homecard.css";
import {Link} from "react-router-dom";
function Homecard({img,title,id}) {
 const productTitleArray=title.split(" ");
 const productTitle=productTitleArray[0]+" "+productTitleArray[1]+" "+productTitleArray[2];
  return (
    <Link to={{pathname:`/product/${id}`}} className='home-card'>
      <img loading="lazy" className="all-products-home" src={img} alt={productTitle} />
      <p>{productTitle}</p>
    </Link>
  )
}

export default Homecard
