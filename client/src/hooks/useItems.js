import React, { useEffect, useState } from "react";

export const useItems = () => {
  const ItemList = () => {
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
  };
  return { ItemList };
};
