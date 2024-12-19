import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/RegistrationForm.css";

// Import images
import studentImg from '../assets/student.png';
import schoolImg from '../assets/school.png';
import driverImg from '../assets/driver.png';
import attenderImg from '../assets/attender.png';
import adminsImg from '../assets/admin.png';
import routesImg from '../assets/route2.png';
import routePointImg from '../assets/routepoint.png';
import parentImg from '../assets/parent.png';

// Import Navbar
import Navbar from '../components/Navbar';

const RegistrationForm = () => {
  return (
    <div className="registration-container">
      {/* Include the Navbar */}
      <Navbar title="Registration Forms" />

      <h1 className="registration-title">Registration Forms</h1>
      <div className="card-container">
        <div className="card">
          <Link to="/student-registration" className="card-link">
          <img src={studentImg} alt="Students" className="card-image" />
          <p className="card-text">Students</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/school-registration" className="card-link">
          <img src={schoolImg} alt="School" className="card-image" />
          <p className="card-text">School</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/driver-registration" className="card-link">
          <img src={driverImg} alt="Driver" className="card-image" />
          <p className="card-text">Driver</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/attender-registration" className="card-link">
          <img src={attenderImg} alt="Attender" className="card-image" />
          <p className="card-text">Attender</p>
        </Link>
        </div>
        <div className="card">
          <Link to="/admin-registration" className="card-link">
          <img src={adminsImg} alt="Admins" className="card-image" />
           <p className="card-text">Admins</p>
        </Link>
        </div>

        <div className="card">
          <Link to="/route-registration" className="card-link">
          <img src={routesImg} alt="Routes" className="card-image" />
          <p className="card-text">Routes</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/routepoint-registration" className="card-link">
          <img src={routePointImg} alt="Route-point" className="card-image" />
          <p className="card-text">Route-point</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/parent-registration" className="card-link">
          <img src={parentImg} alt="Parent" className="card-image" />
          <p className="card-text">Parent</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
