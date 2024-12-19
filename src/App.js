// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LiveMap from './pages/LiveMap'; // Import LiveMap component
import LoginPage from './pages/LoginPage';
import TrackingPage from './pages/TrackingPage';
import MapPage from './pages/MapPage';
import GetStartedPage from './pages/GetStartedPage';
import AdminPage from './pages/AdminPage';
import MenuPage from './pages/MenuPage';
import DriverTrackerPage from './pages/DriverTrackerPage';
import SchoolPage from './pages/SchoolPage';
import RegistrationForm from './pages/RegistrationForm';
import AdminRegistrationForm from './pages/AdminForm';
import AttenderRegistrationForm from './pages/AttenderForm';
import DriverRegistrationForm from './pages/DriverForm';
import ParentRegistrationForm from './pages/ParentForm';
import SchoolRegistrationForm from './pages/SchoolForm';
import StudentRegistrationForm from './pages/StudentForm';
import RouteRegistrationForm from './pages/RouteForm';
import RoutePointForm from './pages/RoutePointForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/map/:studentId" element={<MapPage />} />
        <Route path="/parent" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/driver-tracker" element={<DriverTrackerPage />} />
        <Route path="/school" element={<SchoolPage />} />
        <Route path="/registration-forms" element={<RegistrationForm />} />
        <Route path="/admin-registration" element={<AdminRegistrationForm />} />
        <Route path="/attender-registration" element={<AttenderRegistrationForm />} />
        <Route path="/driver-registration" element={<DriverRegistrationForm />} />
        <Route path="/parent-registration" element={<ParentRegistrationForm />} />
        <Route path="/school-registration" element={<SchoolRegistrationForm />} />
        <Route path="/student-registration" element={<StudentRegistrationForm />} />
        <Route path="/route-registration" element={<RouteRegistrationForm />} />
        <Route path="/routepoint-registration" element={<RoutePointForm />} />
        
        {/* Add the route for LiveMap.js */}
        <Route path="/live-map" element={<LiveMap />} />
      </Routes>
    </Router>
  );
};

export default App;
