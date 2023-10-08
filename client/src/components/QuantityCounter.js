import React, { useState } from "react";

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
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
};

export default QuantityCounter;
