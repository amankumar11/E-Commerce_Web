import React, { useState } from "react";
import "../assets/css/cartcard.css";

const QuantityCounter = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="quant-counter">
      <button onClick={decreaseCount} className="count-btn decrease">
        -
      </button>
      <span className="count">{count}</span>
      <button onClick={increaseCount} className="count-btn increase">
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
