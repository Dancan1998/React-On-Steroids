import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h3>{count}</h3>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
    </>
  );
};

export default UseStateCounter;
