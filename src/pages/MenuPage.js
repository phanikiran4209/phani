// src/pages/MenuPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Importing Navbar component
import "../styles/MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="menu-page">
      <Navbar title="Website Title" />
      <div className="tracking-container1">
        <div className="card1">
          <img
            src={require("../assets/route.png")}
            alt="By Route"
            className="card-image1"
          />
          <h3>BY ROUTE</h3>
          <button
            className="arrow-button left-arrow"
            onClick={() => navigate("/live-map")} // Navigate to LiveMap.js
          >
            &#8592;
          </button>
        </div>
        <div className="card1">
          <img
            src={require("../assets/driver.png")}
            alt="By Driver"
            className="card-image1"
          />
          <h3>BY DRIVER</h3>
          <button
            className="arrow-button right-arrow"
            onClick={() => navigate("/driver-tracker")}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
