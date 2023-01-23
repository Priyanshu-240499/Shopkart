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
    src: "https://www.digitaltrends.com/wp-content/uploads/2021/11/hp-pavilion-gaming-desktop-hero-image.jpg?fit=720%2C720&p=1",
  },
  {
    name: "women's clothing",
    src: "https://www.digitaltrends.com/wp-content/uploads/2021/11/hp-pavilion-gaming-desktop-hero-image.jpg?fit=720%2C720&p=1",
  }
];
function Lowernav() {
  return (
  <div className="lower-nav">
    <div className="lower-nav-sub">
    {lowernavdata.map(item=><LowerSub key={item.name} name={item.name} src={item.src} />)}
    </div>
  </div>
  );
}

export default Lowernav;
