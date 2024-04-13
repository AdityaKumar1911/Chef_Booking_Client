import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import "../OurChefs/OurChefs.css";
import { useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const OurChefs = () => {
  const [chefs, setChefs] = useState([]);
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

  // booking handle

  const handleBooking = (chefID) => {
    isAvailable(chefID);
  };

  const isAvailable = (chefID) => {
    axios
      .get(`http://localhost:4000/chefavailability/${chefID}`)
      .then((response) => {
        const { chef } = response.data;
        if (chef && chef.isAvailable === false) {
          alert("Your selected chef is not available");
        } else {
          check(chefID);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chef availability: ", error);
      });
  };

  // const check = (chefID) => {
  //   const token = localStorage.getItem("jwtToken");
  //   if (!token || token === "0") {
  //     navigate("/Login");
  //   } else {
  //     console.log(`chefPage == > ${chefID}`);
  //     navigate(`/chef-booking`);
  //   }
  // };
  const check = (chefID) => {
    const token = localStorage.getItem("jwtToken");
    if (!token || token === "0") {
      navigate("/Login");
    } else {
      console.log(`chefPage == > ${chefID}`);
      navigate(`/chef-booking?chefID=${chefID}`);
    }
  };


  return (
    <>
      <h3 className="mt-4 mb-4 text-center">Our Popular rated Chefs</h3>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        transitionDuration={500}
        containerClass="container-border-green"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {chefs.map((chef, index) => (
          <div className="chef-card" key={index}>
            <img
              src={
                "https://im.rediff.com/getahead/2016/mar/09womanchef04.jpg?w=670&h=900"
              }
            />
            <p className="chef-name text-center mt-2 mb-2">{chef.name}</p>
            <p style={{ marginBottom: "2px" }}>Email : {chef.email}</p>
            <p style={{ marginBottom: "2px" }}>
              Phone number : {chef.phonenumber}
            </p>
            <p style={{ marginBottom: "2px" }}>
              Start time : {chef.serviceStartTime}
            </p>
            <p style={{ marginBottom: "2px" }}>
              End time : {chef.serviceEndTime}
            </p>
            <div className={chef.isAvailable ? "green-dot" : "red-dot"}></div>
            <p>Rating ⭐⭐⭐</p>
            <button
              type="button"
              class="btn btn-outline-warning book-btn"
              onClick={() => handleBooking(chef._id)}
            >
              Book Chef
            </button>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default OurChefs;
