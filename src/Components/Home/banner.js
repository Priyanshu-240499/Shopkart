import React, {  useState } from "react";
import "./banners.css";
const src = [
  "https://img.freepik.com/free-vector/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.jpg?w=2000",
  "https://img.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg?w=2000",
  "https://img.freepik.com/premium-vector/concept-banner-with-realistic-shopping-cart-yellow-background-vector-illustration_548887-101.jpg?w=2000"
];

const Banner = () => {
  const [index, setindex] = useState(0);

  function right() {
    if (index === src.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }
  function left() {
    if (index === 0) {
      setindex(src.length - 1);
    } else {
      setindex(index - 1);
    }
  }

  return (
    <div className="banner">
      {console.log("banner** render is called")}
      <div className="banner-sub">
        <img loading="lazy" src={src[index]} alt="bannerlogo" />
        <button className="btn-left" onClick={left}>
          ←
        </button>
        <button className="btn-right" onClick={right}>
          →
        </button>
      </div>
    </div>
  );
};

export default Banner;