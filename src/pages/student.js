import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import headshot from "../images/avatar.png";
import { Link } from "react-router-dom";

export default function Student() {
  const { tutors } = useContext(Context);
  const [language, setLanguage] = useState("English");
  const [availability, setAvailability] = useState("Monday");
  const [subject, setSubject] = useState("Mathematics");
  const [filteredTutors, setFilteredTutors] = useState([]);

  function HandleChange(e) {
    const { name, value } = e.target;

    if (name === "language") {
      setLanguage(value);
    }

    if (name === "availability") {
      setAvailability(value);
    }

    if (name === "subject") {
      setSubject(value);
    }
  }

  useEffect(() => {
    const tutorsFiltered = tutors.filter((tutor) => {
      const avai = tutor.availabilty.includes(availability);
      const sub = tutor.expertice.includes(subject);
      const languages = tutor.languages.includes(language);

      if (languages && avai && sub) {
        return tutor;
      }
    });

    setFilteredTutors(tutorsFiltered);
    console.log(filteredTutors);
  }, [language, availability, subject]);

  const newTutorsList = filteredTutors.map((tutor) => (
    <div key={tutor.id} className="user-card">
      <img
        src={headshot}
        alt="headshot"
        style={{ width: 150, borderRadius: "1000px" }}
      />
      <h1>
        <Link to={`meet/${tutor.id}`}>{tutor.name}</Link>
      </h1>
      <p>{tutor.availabilty}</p>
      <p>{tutor.languages}</p>
      <p>{tutor.expertice}</p>
    </div>
  ));

  return (
    <div className="new-tutors-container">
      <div className="about">
        <h1>Look for a tutor here</h1>
        <div className="filter-card">
          <label>What Language do you speak?</label>
          <select name="language" value={language} onChange={HandleChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Chinese">Chinese</option>
            <option value="Russian">Russian</option>
            <option value="French">French</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <div className="filter-card">
          <label>What's your availability</label>
          <select
            name="availability"
            value={availability}
            onChange={HandleChange}
          >
            <option value="Mondays">Monday</option>
            <option value="Tuesdays">Tuesday</option>
            <option value="Wednesdays">Wednesday</option>
            <option value="Thursdays">Thursday</option>
            <option value="Fridays">Friday</option>
            <option value="Saturdays">Saturday</option>
          </select>
        </div>
        <div className="filter-card">
          <label>What do you wanna learn?</label>
          <select name="subject" value={subject} onChange={HandleChange}>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Art">Art</option>
            <option value="Geography">Geography</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>

      {newTutorsList}
    </div>
  );
}
