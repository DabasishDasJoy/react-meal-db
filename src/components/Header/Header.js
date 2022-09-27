import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="nav-list">
          <a href="/home">Home</a>
          <a href="/order">Order</a>
          <a href="/foods">Foods</a>
          <a href="/invoice">Invoice</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
