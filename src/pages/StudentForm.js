import React, { useState } from "react";
import "../styles/StudentForm.css";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    sch_uniq_id: "",
    parent_id: "",
    parent_name: "",
    parent_contact: "",
    student_id: "",
    student_age: "",
    student_sex: "",
    student_status: false,
    route_id: "",
    reserve: "",
    profile_photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Generate a downloadable CSV file with form data except photo
    const csvData = {
      ...formData,
      profile_photo: formData.profile_photo ? formData.profile_photo.name : "",
    };
    const formEntries = Object.entries(csvData);
    const csvContent = [
      ["Field", "Value"],
      ...formEntries.map(([key, value]) => [key, value]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "student_registration_form.csv";
    link.click();
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

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
          Parent ID:
          <input
            type="text"
            name="parent_id"
            value={formData.parent_id}
            onChange={handleChange}
            maxLength={20}
            placeholder="Enter Parent ID"
            required
          />
        </label>
      </div>

      <div className="input-row">
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

      <div className="input-row">
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

        <label>
          Student Age:
          <input
            type="number"
            name="student_age"
            value={formData.student_age}
            onChange={handleChange}
            min={0}
            max={100}
            placeholder="Enter Student Age"
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Student Sex:
          <input
            type="text"
            name="student_sex"
            value={formData.student_sex}
            onChange={handleChange}
            maxLength={1}
            placeholder="M/F"
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

      <div className="checkbox-group">
        <label className="checkbox-label">
          Student Status:
          <input
            type="checkbox"
            name="student_status"
            checked={formData.student_status}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="input-row">
        <label>
          Profile Photo:
          <input
            type="file"
            name="profile_photo"
            onChange={handleChange}
            accept="image/*"
          />
        </label>
      </div>

      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};

export default StudentRegistrationForm;
