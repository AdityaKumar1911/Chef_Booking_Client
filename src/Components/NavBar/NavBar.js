// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import logo from "../../assets/logo_no.png";

function NavBar() {
  const value = localStorage.getItem("value");

  return (
    <nav className="navbar navbar-expand-lg  pl-3 pr-5 sticky-top">
      <Link to="/">
        <div className="app-left">
          <img className="logo" src={logo} alt="" />
          <h3 className="App-name">Chef on Wheelz</h3>
        </div>
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
        <div className="input-icon-container">
          <input className="autosuggest-input" type="text" placeholder="Detect my location" value="" />
        </div>
        <div className="navbar-nav action-buttons ml-auto">
          {value === "0" ? (
            <Link to="/Login" className="login-button">
              Login
            </Link>
          ) : (
            <Link to="/Logout" className="login-button">
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
