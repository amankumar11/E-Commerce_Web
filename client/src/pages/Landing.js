import React, { useEffect, useState } from "react";
import "../assets/css/landingPage.css";
import landingBanner from "../assets/img/landing_banner.webp";
import ItemCard from "../components/ItemCard";
import { getItemData } from "../api/getItem";

const Landing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemData(setItems);
  }, []);

  const productRows = [];
  const serviceRows = [];

  const cardsPerRow = 3;

  for (let i = 0; i < items.length; i += cardsPerRow) {
    const rowItems = items.slice(i, i + cardsPerRow);

    const row = (
      <div className="shop-row" key={i}>
        {rowItems.map((item) => (
          <ItemCard
            key={item.id}
            productName={item.title}
            price={item.price}
            imageUrl={item.images}
            itemType={item.itemType}
            taxes={item.taxes}
            totalAmount={item.totalAmount}
            height="480px"
            width="400px"
            imgHeight="350px"
          />
        ))}
      </div>
    );

    if (rowItems.length > 0) {
      if (rowItems[0].itemType === "product") {
        productRows.push(row);
      } else if (rowItems[0].itemType === "service") {
        serviceRows.push(row);
      }
    }
  }

  const productRowsFilter = [];
  const serviceRowsFilter = [];

  productRowsFilter.push(productRows[0]);
  serviceRowsFilter.push(serviceRows[0]);

  return (
    <div className="landing-page">
      <div className="landing">
        <img src={landingBanner} alt="landingBanner" width="100%"></img>
      </div>
      <div className="mini-banner">
        <a className="enter-shop-btn" href="./shop">
          Enter Shop
        </a>
      </div>
      <div className="items-landing">
        <h1>Featured Products</h1>
        <div className="card-layout">{productRowsFilter}</div>
        {/* <button className="seeall-btn">See All</button> */}
      </div>
      <div className="items-landing">
        <h1>Featured Services</h1>
        <div className="card-layout">{serviceRowsFilter}</div>
        {/* <button className="seeall-btn">See All</button> */}
      </div>
    </div>
  );
};

export default Landing;
