import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>

      <button
        style={{ marginRight: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Ascend
      </button>

      <button
        style={{ marginRight: "10px" }}
        onClick={() => setCount(count - 1)}
      >
        Descend
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
