import React, { useState } from "react";
import "../../styles/SectionList.css";

const Shoes = () => {
  return (
    <div className="section-list">
      <a href="/shoes/adidas">Adidas</a>
      <a href="/shoes/dc-shoes">DC Shoes</a>
      <a href="/shoes/vans">Vans Off The Wall</a>
    </div>
  );
};

export default Shoes;
