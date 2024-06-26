import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import kitchen from "../../assets/kitchen.jpg";
import "../SignUp/SignUp.css";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      // Show success toast
      toast.success("Signup successful");

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error("Failed to register user");
    }
  };

  return (
    <div className="container-fluid">
      <ToastContainer />
      <div className="row justify-content-center align-items-center vh-100">
        <div
          className="col-md-7 d-none d-md-block mt-0"
          style={{ height: "100%", marginLeft: "-26px", overflow: "hidden" }}
        >
          <Link to="/">
            <p className="return-home-btn">Chef Booking</p>
          </Link>
          <img src={kitchen} alt="Kitchen" className="img-fluid h-100" />
        </div>
        <div className="col-md-5 mt-3" style={{ overflow: "hidden" }}>
          <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center">Signup</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">
                Signup
              </button>
            </div>
            <div className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="login-btn">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
