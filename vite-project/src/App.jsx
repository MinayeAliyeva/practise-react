import { useReducer, useState } from "react";

import "./App.css";
import UserDetails from "./UserDetails";
import { Routes } from "./routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(Routes);
function App() {
  return (
    <RouterProvider router={router}>
      <UserDetails />
    </RouterProvider>
  );
}

export default App;
