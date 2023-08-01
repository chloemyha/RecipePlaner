// components/Logout.js

import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Make a POST request to the backend logout endpoint
      await axios.post("/logout");

      // After successful logout, navigate to the login page
      navigate("/login");
    } catch (error) {
      // Handle any errors that occur during logout if needed
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
  onClick={handleLogout}
  className="btn btn-primary btn-sm"
  style={{
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "8px 16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "background-color 0.3s ease",
  }}
>
  Log out
</button>

  );
};

export default Logout;
