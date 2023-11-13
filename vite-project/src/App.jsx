import { useReducer, useState } from "react";

import "./App.css";
import Name from "./Components/Name";
import CardCom from "./Components/CardCom";

function App() {
  // const initialValue = 0;
  // const reducer = (state, action) => {
  //   switch (action) {
  //     case "increment":
  //       return state + 1;
  //     case "dec":
  //       return state - 1;
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, initialValue);
  let skills = ["html", "css", "js"];
  let userName = "Jhon Doe";
  const sayHi = () => {
    console.log(`Hi ${userName}`);
  };
  return (
    <>
      {/* <button onClick={() => dispatch("increment")}>+</button>
      <span>{state}</span>
      <button onClick={() => dispatch("dec")}>-</button> */}
      <h1>{userName}</h1>
      <Name userName={userName} />
      <CardCom func={sayHi} arr={skills} />
    </>
  );
}

export default App;
