import React, { useState } from "react";
import DriverCard from "../components/DriverCard";
import Navbar from "../components/Navbar"; 
import "../styles/DriverTrackerPage.css";

const DriverTrackerPage = () => {
  const [selectedDriver, setSelectedDriver] = useState("driver1");

  const drivers = [
    {
      id: "driver1",
      name: "Driver 1",
      location: "Main Street, Guntur",
      speed: "45 km/h",
    },
    {
      id: "driver2",
      name: "Driver 2",
      location: "Elm Road, Vijayawada",
      speed: "60 km/h",
    },
    {
      id: "driver3",
      name: "Driver 3",
      location: "Oak Avenue, Tenali",
      speed: "50 km/h",
    },
  ];

  const handleDriverChange = (event) => {
    setSelectedDriver(event.target.value);
  };

  const selectedDriverDetails = drivers.find(
    (driver) => driver.id === selectedDriver
  );

  return (
    <div className="tracker-page-wrapper">
      <Navbar title="Driver Tracker" /> {/* Add Navbar here */}
      <div className="tracker-box">
        <h1>Driver Tracker</h1>
        <div className="dropdown-container">
          <label htmlFor="driver-select">Select Driver:</label>
          <select
            id="driver-select"
            value={selectedDriver}
            onChange={handleDriverChange}
          >
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>
        {selectedDriverDetails && (
          <DriverCard
            name={selectedDriverDetails.name}
            location={selectedDriverDetails.location}
            speed={selectedDriverDetails.speed}
          />
        )}
      </div>
    </div>
  );
};

export default DriverTrackerPage;
