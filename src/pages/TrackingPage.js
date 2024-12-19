import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StudentCard from "../components/StudentCard";
import "../styles/TrackingPage.css";
import girl from "../assets/girl.jpg";

const students = [
  { id: "12313", name: "Ravi", photo: girl },
  { id: "12314", name: "Aarav", photo: girl },
  { id: "12315", name: "Siya", photo: girl },
  { id: "12316", name: "Mira", photo: girl },
];


const TrackingPage = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the MapPage
  const handleTrackClick = (studentId) => {
    navigate(`/map/${studentId}`);
  };

  return (
    <div className="tracking-container">
      <Navbar title="Website Title" />
      <div className="tracking-content">
        <h2>Select the Student ID</h2>
        <div className="student-grid">
          {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            photo={student.photo} // Pass photo from the student object
            onTrackClick={handleTrackClick}
          />
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
