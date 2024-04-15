import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import kitchen from "../../assets/kitchen.jpg";
import "../Login/Login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter your password");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      const { token, user } = data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userid", user._id); // Assuming user._id is the user ID
      console.log("User ID saved in localStorage:", user._id);
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Failed to login");
    }
  };

  return (
    <div className="container-fluid">
      <ToastContainer />
      <div className="row justify-content-center align-items-center vh-100">
        <div
          className="col-md-7 d-none d-md-block ml-n26 mt-0 "
          style={{ height: "100%", marginLeft: "-26px", overflow: "hidden" }}
        >
          <Link to="/">
            <p className="return-home-btn">Chef Booking</p>
          </Link>
          <img src={kitchen} alt="Kitchen" className="img-fluid h-100" />
        </div>
        <div className="col-md-5 mt-3" style={{ overflow: "hidden" }}>
          <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center">Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            <div className="mt-3 text-center">
              Not a member?{" "}
              <Link to="/signup">
                <span className="login-btn">Register now</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
