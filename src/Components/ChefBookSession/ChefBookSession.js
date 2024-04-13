import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChefBookSession = ({ dishName, setDishName }) => {
  const [chefs, setChefs] = useState([]);
  const [dishes, setDishes] = useState([
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
      {dishes.map((dish) => (
        <button
          style={{
            backgroundColor: dish === dishName ? "green" : "blue",
            color: "white",
            padding: "5px 10px",
            margin: "5px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setDishName(dish)}
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
                <Card style={{ width: "18rem", margin: "10px" }}>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h4>{obj.name}</h4>
                    </Card.Title>
                    <Card.Text>
                      <h5>Cuisine and Dishes</h5>
                      {obj.dishes.map((d) => (
                        <h6>{d}</h6>
                      ))}
                    </Card.Text>
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
    </>
  );
};

export default ChefBookSession;
