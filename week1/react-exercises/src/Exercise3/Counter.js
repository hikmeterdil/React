import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const feedback = (
    <div>{count <= 10 ? "Keep counting" : "It is higher than 10"}</div>
  );

  return (
    <div className="counter">
      {count}
      {feedback}
      <button onClick={handleClick}>Add one!</button>
    </div>
  );
};

export default Counter;
