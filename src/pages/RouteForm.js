import React, { useState } from "react";
import "../styles/RouteForm.css";

const RouteForm = () => {
  const [formData, setFormData] = useState({
    sch_uniq_id: "",
    sch_country_id: "",
    sch_name: "",
    sch_contact_name: "",
    sch_contact_num: "",
    route_id: "",
    route_name: "",
    route_points_count: "",
    status: false,
    reserve: "",
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
    link.download = "route_form.csv";
    link.click();
  };

  return (
    <form className="route-form" onSubmit={handleSubmit}>
      <h2>Route Registration</h2>

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
          School Name:
          <input
            type="text"
            name="sch_name"
            value={formData.sch_name}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter School Name"
          />
        </label>

        <label>
          Contact Name:
          <input
            type="text"
            name="sch_contact_name"
            value={formData.sch_contact_name}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter Contact Name"
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Contact Number:
          <input
            type="tel"
            name="sch_contact_num"
            value={formData.sch_contact_num}
            onChange={handleChange}
            maxLength={12}
            placeholder="Enter Contact Number"
            pattern="\d*"
          />
        </label>

        <label>
          Route ID:
          <input
            type="text"
            name="route_id"
            value={formData.route_id}
            onChange={handleChange}
            maxLength={8}
            placeholder="Enter Route ID"
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Route Name:
          <input
            type="text"
            name="route_name"
            value={formData.route_name}
            onChange={handleChange}
            maxLength={12}
            placeholder="Enter Route Name"
          />
        </label>

        <label>
          Route Points Count:
          <input
            type="number"
            name="route_points_count"
            value={formData.route_points_count}
            onChange={handleChange}
            min={1}
            max={50}
            placeholder="Enter Points Count"
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

      <div className="input-row">
        <label>
          Reserve:
          <input
            type="text"
            name="reserve"
            value={formData.reserve}
            onChange={handleChange}
            maxLength={8}
            placeholder="Enter Reserve Info"
          />
        </label>
      </div>

      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};

export default RouteForm;
