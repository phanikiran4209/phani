import React, { useState } from "react";
import "../styles/RoutePointForm.css";

const RoutePointForm = () => {
  const [formData, setFormData] = useState({
    sch_uniq_id: "",
    sch_country_id: "",
    route_id: "",
    route_name: "",
    route_point_name: "",
    latitude: "",
    longitude: "",
    student_id: "",
    parent_id: "",
    parent_name: "",
    parent_contact: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Generate a downloadable CSV file with form data
    const csvContent = [
      ["Field", "Value"],
      ...Object.entries(formData),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "route_point_form.csv";
    link.click();
  };

  return (
    <form className="route-point-form" onSubmit={handleSubmit}>
      <h2>Route Point Registration</h2>

      <div className="input-row">
        <label>
          School Unique ID:
          <input
            type="text"
            name="sch_uniq_id"
            value={formData.sch_uniq_id}
            onChange={handleChange}
            maxLength={8}
            placeholder="Enter School Unique ID"
            required
          />
        </label>

        <label>
          School Country ID:
          <input
            type="text"
            name="sch_country_id"
            value={formData.sch_country_id}
            onChange={handleChange}
            maxLength={3}
            placeholder="Enter School Country ID"
            required
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Route ID:
          <input
            type="text"
            name="route_id"
            value={formData.route_id}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter Route ID"
          />
        </label>

        <label>
          Route Name:
          <input
            type="text"
            name="route_name"
            value={formData.route_name}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter Route Name"
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Route Point Name:
          <input
            type="text"
            name="route_point_name"
            value={formData.route_point_name}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter Route Point Name"
          />
        </label>

        <label>
          Latitude:
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            maxLength={10}
            placeholder="Enter Latitude"
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Longitude:
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            maxLength={10}
            placeholder="Enter Longitude"
          />
        </label>

        <label>
          Student ID:
          <input
            type="text"
            name="student_id"
            value={formData.student_id}
            onChange={handleChange}
            maxLength={8}
            placeholder="Enter Student ID"
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Parent ID:
          <input
            type="text"
            name="parent_id"
            value={formData.parent_id}
            onChange={handleChange}
            maxLength={8}
            placeholder="Enter Parent ID"
          />
        </label>

        <label>
          Parent Name:
          <input
            type="text"
            name="parent_name"
            value={formData.parent_name}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter Parent Name"
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Parent Contact:
          <input
            type="tel"
            name="parent_contact"
            value={formData.parent_contact}
            onChange={handleChange}
            maxLength={12}
            placeholder="Enter Parent Contact"
            pattern="\d*"
          />
        </label>
      </div>

      <div className="checkbox-group">
        <label className="checkbox-label">
          Status:
          <input
            type="checkbox"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};

export default RoutePointForm;
