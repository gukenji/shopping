import "../styles/Nav.css";
import React, { useState, useRef } from "react";
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import SectionList from "./TShirts";
import logo from "../images/logo.webp";

const Nav = ({ quantity }) => {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <nav className="navbar">
      <div>
        <img src={logo} className="logo" />
      </div>
      <ul>
        <li>Carrinho: {quantity}</li>
      </ul>
    </nav>
  );
};

export default Nav;
