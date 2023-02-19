import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Movies from "./components/sections/TShirts/Sports";
import Music from "./components/sections/TShirts/Music";
import Nerd from "./components/sections/TShirts/Nerd";
import Sports from "./components/sections/TShirts/Sports";
import TVSeries from "./components/sections/TShirts/TVSeries";
import Adidas from "./components/sections/Shoes/Adidas";
import DCShoes from "./components/sections/Shoes/DCShoes";
import Vans from "./components/sections/Shoes/Vans";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tshirts/movies" element={<Movies />} />
        <Route path="/tshirts/music" element={<Music />} />
        <Route path="/tshirts/nerd" element={<Nerd />} />
        <Route path="/tshirts/sports" element={<Sports />} />
        <Route path="/tshirts/tv-series" element={<TVSeries />} />
        <Route path="/shoes/adidas" element={<Adidas />} />
        <Route path="/shoes/dc-shoes" element={<DCShoes />} />
        <Route path="/shoes/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
