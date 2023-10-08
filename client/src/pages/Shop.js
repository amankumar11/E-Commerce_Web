import React from "react";
import LandingCard from "../components/ItemCard";
import sofagrey from "../assets/img/products/sofa-grey.webp";
import "../assets/css/shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="shop-div">
        <div className="shop-left">
          <h1>All Products</h1>
          <h1>All Services</h1>
        </div>

        <div className="shop-right">
          <h1>Our Products</h1>
          <div className="shop-row">
            <LandingCard
              productName="Grey Sofa"
              price="₹20,000"
              imageUrl={sofagrey}
            />
            <LandingCard
              productName="Grey Sofa"
              price="₹20,000"
              imageUrl={sofagrey}
            />
            <LandingCard
              productName="Grey Sofa"
              price="₹20,000"
              imageUrl={sofagrey}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
