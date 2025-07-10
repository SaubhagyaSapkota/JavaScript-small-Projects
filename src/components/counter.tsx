import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1); //1
    setCount((count) => count + 1); //2
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="justify-center flex">
      <h1>Count :{count}</h1>
      <div>
        <button className="bg-green-400 border-2" onClick={increment}>
          Increment
        </button>
      </div>

      <button className="bg-red-400 border-2" onClick={decrement}>
        Decrement
      </button>
      <button className="bg-yellow-400 border-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
