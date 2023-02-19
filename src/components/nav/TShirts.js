import React, { useState } from "react";
import "../../styles/SectionList.css";

const TShirts = () => {
  return (
    <div className="section-list">
      <a href="/tshirts/sports">Esportes</a>
      <a href="/tshirts/movies">Filmes</a>
      <a href="/tshirts/music">Música</a>
      <a href="/tshirts/nerd">Nerd</a>
      <a href="/tshirts/tv-series">Séries</a>
    </div>
  );
};

export default TShirts;
