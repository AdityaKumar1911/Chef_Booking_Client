import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import logo from "../../assets/logo_no.png";

function NavBar() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userid");
    if (userId) {
      fetch(`http://localhost:4000/userdata/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data.data);
        })
        .catch((error) => console.error("Error fetching user details:", error));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userid");
    setUserDetails(null);
  };

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

        <div className="dropdown">
          <button className="dropbtn">
            {userDetails ? userDetails.name : "User"}
            <i style={{ marginLeft: "20px" }} className="fa fa-user"></i>
          </button>
          <div className="dropdown-content">
            {userDetails && <Link to="/UserProfile">Profile</Link>}
            <Link to="/Login" className="login-button" onClick={handleLogout}>
              {userDetails ? "Logout" : "Login"}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
