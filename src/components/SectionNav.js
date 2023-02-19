import "../styles/SectionNav.css";
import React, { useState, useRef } from "react";
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import TShirts from "./nav/TShirts";
import Shoes from "./nav/Shoes";

const SectionNav = () => {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const dropdownRef2 = useRef(null); // Create a reference for dropdown container

  const [isMenuDropDownOpen, setTShirtDropDownOpen] = useState(false);
  const [isShoesDropDownOpen, setShoesDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeTShirtMenu = () => {
    setTShirtDropDownOpen(false);
  };

  const closeShoesMenu = () => {
    setShoesDropDownOpen(false);
  };

  const removeGray = () => {
    const showcase = document.getElementsByClassName("showcase")[0];
    showcase.classList.remove("gray");
  };

  const openTShirtMenu = () => {
    const showcase = document.getElementsByClassName("showcase")[0];
    setTShirtDropDownOpen(true);
    showcase.classList.add("gray");
  };

  const openShoesMenu = () => {
    const showcase = document.getElementsByClassName("showcase")[0];
    setShoesDropDownOpen(true);
    showcase.classList.add("gray");
  };

  // Call the hook
  useOnHoverOutside(dropdownRef, closeTShirtMenu);
  useOnHoverOutside(dropdownRef2, closeShoesMenu);

  return (
    <nav className="section-navbar">
      <ul>
        <li ref={dropdownRef}>
          <div
            onMouseOver={() => openTShirtMenu()} //use mouseover event to show dropdown
          >
            Camisetas
          </div>
          {isMenuDropDownOpen && <TShirts />}
        </li>
        <li ref={dropdownRef2}>
          <div onMouseOver={() => openShoesMenu()}>Tênis</div>
          {isShoesDropDownOpen && <Shoes />}
        </li>
      </ul>
    </nav>
  );
};

export default SectionNav;
