import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import Navbar from "../components/Navbar";
import "../styles/LoginPage.css";
import stuents from "../assets/stuents.jpg"; 
import ROAD2 from "../assets/ROAD2.jpg";

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login button click
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    // Navigate to the tracking page after login
    navigate("/tracking");
  };

  return (
    <div className="login-container">
      <Navbar title="Website Title" />
      <div className="login-content">
        <div className="illustration">
          <h1 className="student">
            <span className="school-text">School</span>
            <span className="bus-management-text">Bus Management</span>
          </h1>
          
          {/* Image below the text */}
          <img src={stuents} alt="Students" className="stuents-image" />
        </div>

        <div className="login-form">
          <h2 className="parent-login-text">
            <span className="parent-text">Parent </span>
            <span className="login-text"> Login</span>
          </h2>

          {/* Login form */}
          <form onSubmit={handleLogin}>
            <label>User ID:</label>
            <input type="text" placeholder="Enter your ID" />
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
            
            {/* Forgot password link */}
            <a href="/forgot-password"  className="forgot-password">Forgot Password?</a>
            
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      {/* Adding the ROAD2 image to the bottom */}
      <div className="road-image-container">
        <img src={ROAD2} alt="Road" className="road-image" />
      </div>
    </div>
  );
};

export default LoginPage;
