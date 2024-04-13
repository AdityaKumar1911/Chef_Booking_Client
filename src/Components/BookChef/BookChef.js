import React, { useEffect, useState } from "react";
import axios from "axios";
import "../BookChef/BookChef.css";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

function BookChef() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const chefID = searchParams.get("chefID");

  // const [chefID, setChefID] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    serviceDay: "",
    serviceStartTime: "",
    serviceEndTime: "",
    chefId: "",
  });

  useEffect(() => {
    console.log("Chef ID:", chefID);
    setFormData({ ...formData, chefId: chefID });
  }, [chefID]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation errors when the field is edited
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const {
      name,
      email,
      phonenumber,
      serviceDay,
      serviceStartTime,
      serviceEndTime,
    } = formData;
    const newErrors = {};
    if (!name) {
      newErrors.name = "Full Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!phonenumber) {
      newErrors.phonenumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(phonenumber)) {
      newErrors.phonenumber = "Invalid phone number";
    }
    if (!serviceDay) {
      newErrors.serviceDay = "Service start day is required";
    }
    if (!serviceStartTime) {
      newErrors.serviceStartTime = "Service start time is required";
    }
    if (!serviceEndTime) {
      newErrors.serviceEndTime = "Service end time is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post("http://localhost:4000/bookchef", formData);
        alert("Your BookChef is successful");

        axios
          .post("http://localhost:4000/sendEmail", formData)
          .then(() => {
            alert("Email sent successfully");
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again.");
          });
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          serviceDay: "",
          serviceStartTime: "",
          serviceEndTime: "",
          chefId: "",
        });
      } catch (error) {
        console.error("Error adding chef:", error);
        alert("Error adding chef. Please try again.");
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="container-box">
        <div className="title mt-2 mb-5">Book your chef</div>
        <form onSubmit={handleSubmit}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="E.g: John Smith"
                required
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="input__box">
              <span className="details">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johnsmith@hotmail.com"
                required
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div className="input__box">
              <span className="details">Phone Number</span>
              <input
                type="tel"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit phone number"
                required
              />
              {errors.phonenumber && (
                <div className="text-danger">{errors.phonenumber}</div>
              )}
            </div>
            <div className="input__box">
              <span className="details">Service start day</span>
              <input
                type="text"
                name="serviceDay"
                value={formData.serviceDay}
                onChange={handleChange}
                placeholder="Enter start day"
                required
              />
              {errors.serviceDay && (
                <div className="text-danger">{errors.serviceDay}</div>
              )}
            </div>
            <div className="input__box">
              <span className="details">Service start time</span>
              <input
                type="text"
                name="serviceStartTime"
                value={formData.serviceStartTime}
                onChange={handleChange}
                placeholder="Enter start time"
                required
              />
              {errors.serviceStartTime && (
                <div className="text-danger">{errors.serviceStartTime}</div>
              )}
            </div>
            <div className="input__box">
              <span className="details">Service end time</span>
              <input
                type="text"
                name="serviceEndTime"
                value={formData.serviceEndTime}
                onChange={handleChange}
                placeholder="Enter end time"
                required
              />
              {errors.serviceEndTime && (
                <div className="text-danger">{errors.serviceEndTime}</div>
              )}
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Book Chef" />
          </div>
        </form>
      </div>
    </>
  );
}

export default BookChef;