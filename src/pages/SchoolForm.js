import React, { useState } from "react";
import "../styles/SchoolForm.css";

const SchoolRegistrationForm = () => {
  const [formData, setFormData] = useState({
    sch_country_id: "",
    sch_prov_id: "",
    sch_area_id: "",
    sch_entity_id: "",
    sch_id: "",
    sch_name: "",
    sch_contact_num: "",
    sch_contact_name: "",
    sch_status: false,
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

    const formEntries = Object.entries(formData);
    const csvContent = [
      ["Field", "Value"],
      ...formEntries.map(([key, value]) => [key, value]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "school_registration_form.csv";
    link.click();
  };

  return (
    <form className="school-form" onSubmit={handleSubmit}>
      <h2>School Registration</h2>

      <div className="input-row">
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

        <label>
          School Province ID:
          <input
            type="text"
            name="sch_prov_id"
            value={formData.sch_prov_id}
            onChange={handleChange}
            maxLength={3}
            placeholder="Enter Province ID"
            required
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          School Area ID:
          <input
            type="text"
            name="sch_area_id"
            value={formData.sch_area_id}
            onChange={handleChange}
            maxLength={3}
            placeholder="Enter School Area ID"
            required
          />
        </label>

        <label>
          School Entity ID:
          <input
            type="text"
            name="sch_entity_id"
            value={formData.sch_entity_id}
            onChange={handleChange}
            maxLength={3}
            placeholder="Enter School Entity ID"
            required
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          School ID:
          <input
            type="text"
            name="sch_id"
            value={formData.sch_id}
            onChange={handleChange}
            maxLength={8}
            placeholder="Enter School ID"
            required
          />
        </label>

        <label>
          School Name:
          <input
            type="text"
            name="sch_name"
            value={formData.sch_name}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter School Name"
            required
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          School Contact Number:
          <input
            type="tel"
            name="sch_contact_num"
            value={formData.sch_contact_num}
            onChange={handleChange}
            maxLength={12}
            placeholder="Enter School Contact Number"
            pattern="\d*"
            required
          />
        </label>

        <label>
          School Contact Name:
          <input
            type="text"
            name="sch_contact_name"
            value={formData.sch_contact_name}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter School Contact Name"
            required
          />
        </label>
      </div>

      <div className="checkbox-group">
        <label className="checkbox-label">
          Status:
          <input
            type="checkbox"
            name="sch_status"
            checked={formData.sch_status}
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

export default SchoolRegistrationForm;
