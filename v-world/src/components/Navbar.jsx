import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <img src="/logo.svg" alt="logo" className="logo" />
        <div className="nav-mid">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </div>
        <div className="sign-up">
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
