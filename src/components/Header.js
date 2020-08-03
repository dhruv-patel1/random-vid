import React from "react";
import logo from "../assets/vidLogo.svg";
import "../styles/Header.css";

const Header = () => (
  <div className="header">
    <img src={logo} alt="Random Vidz" className="logo" />
    <p className="title">RandomVidz</p>
  </div>
);

export default Header;
