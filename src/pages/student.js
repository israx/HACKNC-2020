import React, { useState } from "react";

export default function Student() {
  const [language, setLanguage] = useState("English");
  const [availability, setAvailability] = useState("Monday");
  const [subject, setSubject] = useState("Mathematics");

  function HandleChange(e) {}

  return (
    <div className="about">
      <h1>Look for a tutor here</h1>
      <div className="filter-card">
        <label>What Language do you speak?</label>
        <select name="language" value={language}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
          <option value="Russian">Russian</option>
        </select>
      </div>
      <div className="filter-card">
        <label>What's your availability</label>
        <select name="availability" value={availability}>
          <option value="English">Monday</option>
          <option value="Spanish">Tuesday</option>
          <option value="Chinese">Wednesday</option>
          <option value="Russian">Thursday</option>
          <option value="Russian">Friday</option>
          <option value="Russian">Saturday</option>
        </select>
      </div>
      <div className="filter-card">
        <label>What do you wanna learn?</label>
        <select name="subject" value={subject}>
          <option value="English">Mathematics</option>
          <option value="Spanish">Science</option>
          <option value="Chinese">Art</option>
          <option value="Russian">Geography</option>
          <option value="Russian">English</option>
          <option value="Russian">Spanish</option>
        </select>
      </div>
    </div>
  );
}
