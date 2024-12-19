import React, { useState } from "react";
import "../styles/AdminForm.css";

const AdminRegistrationForm = () => {
  const [formData, setFormData] = useState({
    schoolId: "",
    adminId: "",
    adminName: "",
    userName: "",
    countryCode: "",
    contactNumber: "",
    lastRole: "",
    status: false,
    reserve: "",
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePhoto: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Generate a downloadable CSV file with form data
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
    link.download = "admin_registration_form.csv";
    link.click();
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>Admin Registration</h2>

      <div className="input-row">
        <label>
          School ID:
          <input
            type="text"
            name="schoolId"
            value={formData.schoolId}
            onChange={handleChange}
            maxLength={8}
            placeholder="Enter School ID"
            required
          />
        </label>

        <label>
          Admin ID:
          <input
            type="text"
            name="adminId"
            value={formData.adminId}
            onChange={handleChange}
            maxLength={8}
            placeholder="Enter Admin ID"
            required
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Admin Name:
          <input
            type="text"
            name="adminName"
            value={formData.adminName}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter Admin Name"
            required
          />
        </label>

        <label>
          Username:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            maxLength={10}
            placeholder="Enter Username"
            required
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Country Code:
          <input
            type="text"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            maxLength={3}
            placeholder="Enter Country Code Eg:+91"
            required
          />
        </label>

        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            maxLength={12}
            placeholder="Enter Mobile Number"
            required
            pattern="\d*" // Ensures that only numbers are allowed
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Last Role (0-5 years):
          <input
            type="text"
            name="lastRole"
            value={formData.lastRole}
            onChange={handleChange}
            placeholder="Enter Last Role (e.g., 3)"
            required
            pattern="\d*" // Ensures that only numbers are allowed for Last Role
          />
        </label>

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
        <label>
        Profile Photo:
        <input
          type="file"
          name="profilePhoto"
          accept=".jpg, .png"
          onChange={handleFileChange}
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

export default AdminRegistrationForm;
