import { useReducer, useState } from "react";

import "./App.css";
import Name from "./Components/Name";
import CardCom from "./Components/CardCom";
import TodoApp from "./todo";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [fullName, setFullName] = useState("Jhon Doe");
  return (
    <>
      <TodoApp />
    </>
  );
}

export default App;
