import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './ChefBookSession.css';

const ChefBookSession = ({ dishName, setDishName }) => {
  const [chefs, setChefs] = useState([]);
  const [dishes] = useState([
    "Butter Chicken",
    "Biryani",
    "Paneer Tikka",
    "Masala Dosa",
    "Chicken Tikka Masala",
    "Samosa",
    "Pizza",
    "Pasta",
    "Kathiawadi food",
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/chefdata")
      .then((response) => {
        setChefs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chefs: ", error);
      });
  }, []);

  const handleClick = () => {
    const token = localStorage.getItem("jwtToken");
    if (!token || token === "0") {
      navigate("/Login");
    } else {
      navigate("/chef-booking");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div>
        <Button className="sort-by-btn mr-2">Sort By</Button>
        <Button>filter-button</Button>
        </div>
        {dishes.map((dish) => (
          <button
            style={{
              backgroundColor: dish === dishName ? "#fef6ee" : "#f9fafb",
              border: "1px solid #eaecf0",
              borderRadius: "6px",
              color: "#475467",
              display: "inline-block",
              fontSize: "15px",
              marginRight: "10px",
              padding: "8px 20px",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => setDishName(dish)}
            key={dish}
          >
            <h4>{dish}</h4>
          </button>
        ))}
        <br />
        {chefs.map((obj) => (
          <>
            {obj.dishes.map((dish) => (
              <>
                {dish === dishName && (
                  <Card className="card-chef" >
                    <div className="logo-name">
                    <div>
                    <Card.Img 
                      variant="top"
                      src="https://via.placeholder.com/150"
                      style={{ borderRadius: "50%", height: "100px", width: "100px", objectFit: "cover", padding:"10px" }}
                    />
                    </div>
                    <div>
                    <Card.Title>
                        <h4>{obj.name}</h4>
                      </Card.Title>
                      <div className="card-text mt-0.1 ">
                      <Card.Text >
                        <h5>Cuisine and Dishes</h5>
                        {obj.dishes.map((d) => (
                          <button id="dish-btn"><p key={d}>{d}</p></button>
                        ))}
                      </Card.Text>
                      </div>
                    </div>
                    </div>
                    <Card.Body>
                    <div>
                      <p>Available from</p>
                        <p>
                          {obj.serviceStartTime} to {obj.serviceEndTime}
                        </p>
                      </div>
                      
                      <Button
                        variant="primary"
                        style={{ borderRadius: "5px", cursor: "pointer" }}
                        onClick={handleClick}
                      >
                        Book a session
                      </Button>
                      
                    </Card.Body>
                  </Card>
                )}
              </>
            ))}
          </>
        ))}
      </div>
    </>
  );
};

export default ChefBookSession;
