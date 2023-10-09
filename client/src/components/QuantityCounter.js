import "../assets/css/cartcard.css";

const QuantityCounter = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="quant-counter">
      <button onClick={onDecrease} className="count-btn decrease">
        -
      </button>
      <span className="count">{quantity}</span>
      <button onClick={onIncrease} className="count-btn increase">
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
