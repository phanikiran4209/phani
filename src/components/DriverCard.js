import React from "react";
import "../styles/DriverCard.css";
import driverImage from "../assets/driver.png"; // Import the image

const DriverCard = ({ name, location, speed }) => {
  return (
    <div className="driver-card-wrapper">
      <div className="driver-card">
        <img src={driverImage} alt="Driver" className="driver-image" />
        <h2>{name}</h2>
        <div className="details">
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Speed:</strong> {speed}</p>
        </div>
        <div className="button-container">
          <button className="live-map-button">Live Map</button>
          <button className="call-button">Call</button>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
