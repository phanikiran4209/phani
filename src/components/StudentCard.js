import React from "react";
import "../styles/StudentCard.css";
import defaultPhoto from "../assets/girl.jpg"; // Default image

const StudentCard = ({ id, name, photo, onTrackClick }) => {
  return (
    <div className="student-card">
      <img 
        src={photo || defaultPhoto} // Use the passed photo or fallback to the default
        alt={name} 
        className="student-image" 
      />
      <div className="student-info">
        <p>ID: {id}</p>
        <p>Name: {name}</p>
      </div>
      <button className="track-btn" onClick={() => onTrackClick(id)}>
        Track
      </button>
    </div>
  );
};

export default StudentCard;
