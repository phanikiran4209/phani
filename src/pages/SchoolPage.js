import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar"; // Assuming Navbar is reusable
import "../styles/SchoolPage.css";

const SchoolPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log("User ID:", userId);
    console.log("Password:", password);

    // Navigate to the RegistrationForm page after login
    navigate("/registration-forms");
  };

  return (
    <div className="get-started-page2">
      <Navbar title="School Bus Management" />
      <div className="overlay2">
        <h2 className="get-started-title2">
          <span className="school-title2">School</span>
          <span className="login-title2">Login</span>
        </h2>
        <form onSubmit={handleSubmitLogin}>
          <div className="input-container2">
            <label htmlFor="userId">User ID:</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="input-box2"
              required
            />
          </div>
          <div className="input-container2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-box2"
              required
            />
          </div>
          <Link to="/forgot-password" className="forgot-password-link2">
            Forgot Password?
          </Link>
          <button type="submit" className="get-started-btn2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SchoolPage;
