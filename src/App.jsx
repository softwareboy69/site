import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import What from "./pages/What";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/what-we-offer" element={<What />} />
    </Routes>
  );
};

export default App;
