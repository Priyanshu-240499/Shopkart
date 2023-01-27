import React from "react";
import "./lower.css";
import LowerSub from "./lower-sub";

const lowernavdata = [
  {
    name: "electronics",
    src: "https://www.digitaltrends.com/wp-content/uploads/2021/11/hp-pavilion-gaming-desktop-hero-image.jpg?fit=720%2C720&p=1",
  },
  {
    name: "jewelery",
    src: "https://www.chidambaramcovering.com/image/cache/catalog/18-Inches-Chain/shn061-heavy-thick-gold-chain-design-cuban-link-chain-one-gram-gold-mens-chain-online-1-850x1000.jpg.webp",
  },
  {
    name: "men's clothing",
    src: "https://cdn.shopify.com/s/files/1/0414/3552/9370/products/IMG_9718_7a851bc8-d3f8-4fe5-93e1-504fe40941f8_800x.jpg?v=1670495298",
  },
  {
    name: "women's clothing",
    src: "https://www.byrdie.com/thmb/MaW9gJOXRck8DU-W2Xw6NIt1koo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp77f240cbn22300_Medium_1339984-crop-747b8b61a5f245ebae444ba76f8ae1fb.jpg",
  }
];
function Lowernav() {
  return (
  <div className="lower-nav">
    <h1>Categories</h1>
    <div className="lower-nav-sub">
    {lowernavdata.map(item=><LowerSub key={item.name} name={item.name} src={item.src} />)}
    </div>
  </div>
  );
}

export default Lowernav;
