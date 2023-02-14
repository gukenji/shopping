import "../styles/SectionNav.css";
import React, { useState, useRef } from "react";
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import TShirts from "./TShirts";
import Shoes from "./Shoes";

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

  useOnHoverOutside(dropdownRef, closeTShirtMenu); // Call the hook
  useOnHoverOutside(dropdownRef2, closeShoesMenu); // Call the hook

  return (
    <nav className="section-navbar">
      <ul>
        <li ref={dropdownRef}>
          <div
            onMouseOver={() => setTShirtDropDownOpen(true)} //use mouseover event to show dropdown
          >
            Camisetas
          </div>
          {isMenuDropDownOpen && <TShirts />}
        </li>
        <li ref={dropdownRef2}>
          <div
            onMouseOver={() => setShoesDropDownOpen(true)} //use mouseover event to show dropdown
          >
            Tênis
          </div>
          {isShoesDropDownOpen && <Shoes />}
        </li>
      </ul>
    </nav>
  );
};

export default SectionNav;
