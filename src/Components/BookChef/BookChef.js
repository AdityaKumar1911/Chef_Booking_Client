import React, { useState, useEffect } from "react";
import axios from "axios";
import "../BookChef/BookChef.css";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookChef() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const chefID = searchParams.get("chefID");

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    serviceDay: "",
    serviceStartTime: null,
    serviceEndTime: "",
    chefId: chefID || "",
  });

  useEffect(() => {
    console.log("Chef ID:", chefID);
    setFormData((prev) => ({ ...prev, chefId: chefID || "" }));
  }, [chefID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleStartTimeChange = (time) => {
    const selectedTime = `${time.getHours()}:${time.getMinutes() < 10 ? "0" : ""
      }${time.getMinutes()}`;
    setFormData((prev) => ({ ...prev, serviceStartTime: selectedTime }));
  };

  const handleEndTimeChange = (time) => {
    const selectedTime = `${time.getHours()}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`;
    if (formData.serviceStartTime) {
      const startTime = new Date(0, 0, 0, ...formData.serviceStartTime.split(":"));
      const endTime = new Date(0, 0, 0, ...selectedTime.split(":"));
      if (endTime <= startTime) {
        toast.error("Invalid time selected. Please select an end time after the start time.");
        return;
      }
    }
    setFormData((prev) => ({ ...prev, serviceEndTime: selectedTime }));
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
        toast.success("Your BookChef is successful");

        axios
          .post("http://localhost:4000/sendEmail", formData)
          .then(() => {
            setTimeout(() => {
              toast.success("Email sent successfully");
            }, 2000);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            toast.error("Error sending email. Please try again.");
          });
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          serviceDay: "",
          serviceStartTime: null,
          serviceEndTime: "",
          chefId: chefID || "",
        });
      } catch (error) {
        console.error("Error adding chef:", error);
        toast.error("Error adding chef. Please try again.");
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
              <span className="details ">Service start day</span>
             <div>
                <DatePicker 
                selected={formData.serviceDay}
                onChange={(date) =>
                  setFormData({ ...formData, serviceDay: date })
                }
                placeholderText="Select start day"
                className="form-control"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()} // Disable selection of previous dates
                required
              />
             </div>
              {errors.serviceDay && (
                <div className="text-danger">{errors.serviceDay}</div>
              )}
            </div>
            <div className="input__box">
              <span className="details">Service start time</span>
              <DatePicker 
                selected={
                  formData.serviceStartTime
                    ? new Date(0, 0, 0, ...formData.serviceStartTime.split(":"))
                    : null
                }
                onChange={handleStartTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Select start time"
                required
              />
              {errors.serviceStartTime && (
                <div className="text-danger">{errors.serviceStartTime}</div>
              )}
            </div>
            <div className="input__box">
              <span className="details">Service end time</span>
              <DatePicker
                selected={
                  formData.serviceEndTime
                    ? new Date(0, 0, 0, ...formData.serviceEndTime.split(":"))
                    : null
                }
                onChange={handleEndTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Select end time"
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
