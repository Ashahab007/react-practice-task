// !Build a simple counter app  that a button that increase the count by 1 when clicked. A button that decreases the count by 1 when clicked. A button that resets the count to zero. Display the count dynamically on the screen.

import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  function handleAddCount() {
    const updateCount = count + 1;
    setCount(updateCount);
  }

  function handleDecCount() {
    let updateCount = count - 1;

    {
      updateCount < 0 ? 0 : setCount(updateCount);
    }
  }

  function handleReset() {
    const updateCount = 0;
    setCount(updateCount);
  }

  return (
    <div style={{ border: "2px solid green", borderRadius: "10px" }}>
      <p>{count}</p>
      <button onClick={handleAddCount}>Add Count</button>
      <button onClick={handleDecCount}>Decrease Count</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Count;
