import { useState } from "react";
import React from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
