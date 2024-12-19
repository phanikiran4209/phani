import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/MapPage.css";
import girl from "../assets/girl.jpg"; // Replace with dynamic student photo if needed.

const students = [
  { id: "12313", name: "Ravi", photo: girl },
  { id: "12314", name: "Aarav", photo: girl },
  { id: "12315", name: "Siya", photo: girl },
  { id: "12316", name: "Mira", photo: girl },
];

const MapPage = () => {
  const { studentId } = useParams();
  const [activeBox, setActiveBox] = useState(null); // 'message' or 'reroute'
  const [message, setMessage] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Find student details by ID
  const student = students.find((s) => s.id === studentId);

  const handleSendMessage = () => {
    console.log("Message sent:", message); // Handle logic for sending message
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
    setActiveBox(null);
    setMessage("");
  };

  const handleRerouteDone = () => {
    console.log("Requested drop location:", dropLocation); // Handle logic for reroute
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
    setActiveBox(null);
    setDropLocation("");
  };

  return (
    <div className="map-page">
      <Navbar title="Website Title" />

      <button
        className={`sidebar-toggle ${isSidebarOpen ? "open" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <span className="hamburger-icon">{isSidebarOpen ? "✖" : "☰"}</span>
      </button>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {student && (
          <div className="info-card">
            <div className="card-content">
              <div className="avatar">
                <img src={student.photo} alt={student.name} className="avatar-img" />
              </div>
              <div className="card-details">
                <p className="card-title">Dear {student.name}.....</p>
                <p className="arrival-time">
                  Arrival time: <span className="arrival-highlight">5:39pm</span>
                </p>
              </div>
            </div>
            <div className="card-buttons">
              <button
                className="card-button"
                onClick={() => setActiveBox(activeBox === "message" ? null : "message")}
              >
                <span className="button-icon">📧</span>
                Message Driver
              </button>
              <button
                className="card-button"
                onClick={() => setActiveBox(activeBox === "reroute" ? null : "reroute")}
              >
                <span className="button-icon">📍</span>
                Ask to Reroute
              </button>
            </div>

            {/* Message Box */}
            {activeBox === "message" && (
              <div className="message-box">
                <h3>Send a Message</h3>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows="4"
                  className="message-input"
                ></textarea>
                <button className="send-button" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            )}

            {/* Reroute Box */}
            {activeBox === "reroute" && (
              <div className="reroute-box">
                <h3>Enter Drop Location</h3>
                <input
                  type="text"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  placeholder="Enter location..."
                  className="reroute-input"
                />
                <button className="done-button" onClick={handleRerouteDone}>
                  Done
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="map-container">
        <iframe
          title="Map of Toronto Entertainment District"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2!2d-79.3839!3d43.6435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sEntertainment%20District%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca"
          width="100%"
          height="400px"
          loading="lazy"
          className="map-iframe"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {alertVisible && (
        <div className="alert-message">
          {activeBox === "message" ? "Message sent successfully!" : "Drop location updated successfully!"}
        </div>
      )}
    </div>
  );
};

export default MapPage;
