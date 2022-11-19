import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="m-0 ">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
