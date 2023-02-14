import "../styles/Home.css";
import React, { useState, useRef } from "react";
import banner from "../images/banner.webp";
const Home = () => {
  return (
    <div>
      <img src={banner} className="banner" />
    </div>
  );
};

export default Home;
