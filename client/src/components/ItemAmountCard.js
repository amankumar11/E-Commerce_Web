import React from "react";
import "../assets/css/amountcard.css";

const ItemAmountCard = ({
  itemName,
  price,
  taxes,
  itemType,
  totalAmount,
  quantity,
}) => {
  return (
    <div className="amount-card">
      <div className="amount-box">
        <h3>
          {itemName}({quantity})
        </h3>
        <p>{price}</p>
      </div>

      {taxes.map(
        (tax) =>
          tax.taxType !== "" && (
            <div className="amount-box">
              <p>Tax-{tax.taxType}</p>
              <p>{tax.taxAmount}</p>
            </div>
          )
      )}
      {itemType === "product" ? (
        <div className="amount-box">
          <p>Tax-PC</p>
          <p>200</p>
        </div>
      ) : (
        <div className="amount-box">
          <p>Tax-SC</p>
          <p>100</p>
        </div>
      )}
      <div className="item-total">
        {itemType === "product" ? (
          <h3>{200 + totalAmount * quantity}</h3>
        ) : (
          <h3>{100 + totalAmount * quantity}</h3>
        )}
      </div>
    </div>
  );
};

export default ItemAmountCard;
