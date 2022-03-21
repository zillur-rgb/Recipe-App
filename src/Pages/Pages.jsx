import React from "react";
import Home from "./Home";
import Cuisine from "../Components/Cuisine";
import { Routes, Route } from "react-router-dom";
import Searched from "../Components/Searched";

const pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:tags" element={<Searched />} />
      </Routes>
    </div>
  );
};

export default pages;
