import { useReducer, useState } from "react";

import "./App.css";

function App() {
  const initialValue = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "dec":
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <button onClick={() => dispatch("increment")}>+</button>
      <span>{state}</span>
      <button onClick={() => dispatch("dec")}>-</button>
    </>
  );
}

export default App;
