import React from "react";
import Home from "./Home";
import Cuisine from "../Components/Cuisine";
import Category from "../Components/Category";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </div>
  );
};

export default pages;
