import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Sports from "./components/sections/Sports";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
