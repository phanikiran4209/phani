import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/GetStartedPage.css";  // You will create this CSS file in the next step

const GetStartedPage = () => {
  const [selectedLogin, setSelectedLogin] = useState("");

  const handleChange = (event) => {
    setSelectedLogin(event.target.value);
  };

  return (
    <div className="get-started-page1">
      <div className="overlay1">
        <h2 className="get-started-title1">
          <span className="school-title1">School</span>
          <span className="busmanagement-title1">BusManagement</span>
        </h2>
        <div className="dropdown-container1">
          <select
            className="dropdown1"
            value={selectedLogin}
            onChange={handleChange}
          >
            <option value="">Select Login Type</option>
            <option value="parent">Parent Login</option>
            <option value="admin">Admin Login</option>
            <option value="school">School Login</option>
          </select>
        </div>
        {selectedLogin && (
          <Link to={`/${selectedLogin}`} className="get-started-btn1">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default GetStartedPage;
