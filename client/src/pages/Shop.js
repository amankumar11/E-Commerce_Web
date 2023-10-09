import React, { useState, useEffect } from "react";
import LandingCard from "../components/ItemCard";
import sofagrey from "../assets/img/products/sofa-grey.webp";
import "../assets/css/shop.css";

const Shop = () => {
  const [selectedOption, setSelectedOption] = useState("Products");

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/item")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const productRows = [];
  const serviceRows = [];

  const cardsPerRow = 3;

  for (let i = 0; i < items.length; i += cardsPerRow) {
    const rowItems = items.slice(i, i + cardsPerRow);

    const row = (
      <div className="shop-row" key={i}>
        {rowItems.map((item) => (
          <LandingCard
            key={item.id}
            productName={item.title}
            price={item.price}
            imageUrl={item.images}
            itemType={item.itemType}
            // Assuming you want the first image from the array
          />
        ))}
      </div>
    );

    // Check the type and push to the appropriate array
    if (rowItems.length > 0) {
      if (rowItems[0].itemType === "product") {
        productRows.push(row);
      } else if (rowItems[0].itemType === "service") {
        serviceRows.push(row);
      }
    }
  }

  return (
    <div className="shop-page">
      <div className="shop-div">
        <div className="shop-left">
          <div className="shop-left-items">
            <h3>Type</h3>
            <p>
              <input
                type="radio"
                value="Products"
                checked={selectedOption === "Products"}
                onChange={() => handleOptionChange("Products")}
              />
              Products
            </p>
            <p>
              <input
                type="radio"
                value="Services"
                checked={selectedOption === "Services"}
                onChange={() => handleOptionChange("Services")}
              />
              Services
            </p>
          </div>
        </div>

        <div className="shop-right">
          <h1>Our {selectedOption}</h1>
          {selectedOption === "Products" ? (
            <div>{productRows}</div>
          ) : (
            <div>{serviceRows}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
