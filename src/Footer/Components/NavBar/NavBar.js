// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import logo from "../../assets/logo.png";

function NavBar() {
  const Value = localStorage.getItem("value");
  const value = JSON.parse(Value);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pl-3 pr-5 fixed-top">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarCollapse"
        className="collapse navbar-collapse justify-content-start"
      >
        <div className="navbar-nav action-buttons ml-auto">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
          {value === "0" ? (
            <Link to="/Login" className="btn btn-primary">
              Login
            </Link>
          ) : (
            <Link to="/Logout" className="btn btn-primary">
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
