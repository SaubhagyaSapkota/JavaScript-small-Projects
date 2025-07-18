// useReducer hook

import { useReducer } from "react";
type Action = { type: "increment" } | { type: "decrement" };
const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const CounterRED = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex justify-center text-7xl">
      <button className="bg-red-600" onClick={() => dispatch({ type: "decrement" })}>-</button>
      {count}
      <button className="bg-green-600" onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export default CounterRED;
