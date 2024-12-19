// src/pages/AdminPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";  // Importing Navbar component
import "../styles/AdminPage.css";  // Link to the CSS file

const AdminPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpPage, setIsOtpPage] = useState(false); // State to toggle between login and OTP form
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setIsOtpPage(true); // Show OTP page after login
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/\d/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Automatically move to the next input field
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    console.log("Entered OTP:", otp.join(''));
    navigate("/menu"); // Navigate to MenuPage on OTP verification
  };

  return (
    <div className="get-started-page">
      {/* Add Navbar here */}
      <Navbar title="Website Title" />

      <div className="overlay">
        <h2 className="get-started-title">
          <span className="admin-title">Admin</span>
          <span className="login-title">Login</span>
        </h2>

        {!isOtpPage ? (
          <form onSubmit={handleSubmitLogin}>
            <div className="input-container">
              <label htmlFor="userId" className="userId">User ID:</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="input-box"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-box"
                required
              />
            </div>
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            <button type="submit" className="get-started-btn">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSubmitOtp}>
            <h3 className="otp-title">Enter OTP</h3>
            <div className="otp-container">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  maxLength="1"
                  className="otp-input"
                  required
                />
              ))}
            </div>
            <button type="submit" className="get-started-btn">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
