import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserProfile.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const UserProfileCard = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [userData, setUserData] = useState(null);

  const handleButtonClick = (cardNumber) => {
    setActiveCard(cardNumber);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userid");
    console.log("User ID:", userId);
    if (userId) {
      fetch(`http://localhost:4000/userdata/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data.data);
          console.log("Response data:", data.data);
        })
        .catch((error) =>
          console.error("Error fetching user data:", error)
        );
    }
  }, []);

  return (
    <div className="wrapper">
      <NavBar />
      <div className="container-fluid profile mt-5">
        <div className="card" style={{ width: "20%" }}>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img
                src="https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=2048x2048&w=is&k=20&c=lDJRQWb0FtKq9R8biMKvGGZVqn0sVGlUHDPoxR83nWc="
                alt="User Profile"
                className="rounded-circle mr-3"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <h5 className="card-title">Name</h5>
            <p className="card-text">{userData ? userData.name : ""}</p>
            <h5 className="card-title">Email</h5>
            <p className="card-text">{userData ? userData.email : ""}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className={`btn-details ${activeCard === 1 ? "active" : ""}`}
              onClick={() => handleButtonClick(1)}
              style={{
                backgroundColor: activeCard === 1 ? "#fef6ee" : "",
                color: activeCard === 1 ? "#ef6820" : "",
              }}
            >
              Upcoming Sessions
            </button>
          </div>
          <div className="col">
            <button
              className={`btn-details ${activeCard === 2 ? "active" : ""}`}
              onClick={() => handleButtonClick(2)}
              style={{
                backgroundColor: activeCard === 2 ? "#fef6ee" : "",
                color: activeCard === 2 ? "#ef6820" : "",
              }}
            >
              Saved Addresses
            </button>
          </div>
          <div className="col">
            <button
              className={`btn-details  ${activeCard === 3 ? "active" : ""}`}
              onClick={() => handleButtonClick(3)}
              style={{
                backgroundColor: activeCard === 3 ? "#fef6ee" : "",
                color: activeCard === 3 ? "#ef6820" : "",
              }}
            >
              Saved Payment Methods
            </button>
          </div>

          {activeCard === 1 && (
            <div className="card mt-3">
              <div className="card-body">Card 1 content</div>
            </div>
          )}
          {activeCard === 2 && (
            <div className="card mt-3">
              <div className="card-body">Card 2 content</div>
            </div>
          )}
          {activeCard === 3 && (
            <div className="card mt-3">
              <div className="card-body">Card 3 content</div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfileCard;
