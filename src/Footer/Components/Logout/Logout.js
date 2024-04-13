import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  localStorage.setItem("value", JSON.stringify(0));
  localStorage.setItem("jwtToken", JSON.stringify(0));
  useEffect(() => {
    navigate("/Login", { replace: false });
  }, [navigate]);
  return <div>Logout</div>;
};

export default Logout;
