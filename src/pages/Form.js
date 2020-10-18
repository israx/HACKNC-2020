<<<<<<< Updated upstream
import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
// import {Alert} from "react-native";
// import Checkbox from "./CheckBox";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [avail, setAvail] = useState("");
  const [tutorOb, setTutorOb] = useState({});
  const [newTutors, setNewTutors] = useState([]);
  const [on, setOn] = useState(true);

  //   const object = { n: "whatever" };
  //   const { n } = object;
  //   console.log(n);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(on == true);
    }
    if (name === "email") {
      setEmail(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(on == true);
    }
    if (name === "subject") {
      setSubject(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(on == true);
    }
    if (name === "avail") {
      setAvail(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(on == true);
    }
    console.log(tutorOb);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setNewTutors((prev) => [...prev, tutorOb]);
    setOn((prev) => !prev);
    console.log(newTutors);
    setName("");
    setEmail("");
    setSubject("");
    setAvail("");
  };
=======
import React, { useContext } from "react";
import { Context } from "../Context";

function Form() {
  const {
    handleChange,
    onSubmit,
    name,
    email,
    expertice,
    availabilty,
    on,
    languages,
    description,
  } = useContext(Context);
>>>>>>> Stashed changes

  return (
    <form>
      <div>
        {on ? (
          " "
        ) : (
<<<<<<< Updated upstream
          <h3 className = "Join-message">
            Thanks for being part of change and welcome to our team of tutors.{" "}
=======
          <h3>
            Thanks for being part of change and welcome to our team of tutors.
>>>>>>> Stashed changes
          </h3>
        )}
        <label className="Join-text">Name: </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
        <br></br>
      </div>

      <div>
        <label className="Join-text">Email: </label>
        <input
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <br></br>
      </div>

      <div>
        <label className="Join-text">Subject: </label>
        <select value={expertice} onChange={handleChange} name="expertice">
          <option value="">Select</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Art">Art</option>
          <option value="Geography">Geography</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>

      <div>
        <label className="Join-text">Availability: </label>
        <select value={availabilty} onChange={handleChange} name="availabilty">
          <option value="">Select</option>
          <option value="Mondays">Monday</option>
          <option value="Tuesdays">Tuesday</option>
          <option value="Wednesdays">Wednesday</option>
          <option value="Thursdays">Thursday</option>
          <option value="Fridays">Friday</option>
          <option value="Saturdays">Saturday</option>
          <option value="Sundays">Sunday</option>
        </select>
        <br></br>
      </div>

      <div>
        <label className="Join-text">Language: </label>
        <select value={languages} onChange={handleChange} name="languages">
          <option value="">Select</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
          <option value="Indi">Indi</option>
          <option value="French">French</option>
          <option value="Russian">Russian</option>
        </select>
        <br></br>
      </div>
      <textarea
        name="description"
        value={description}
        placeholder="Why do you want to be a tutor?"
        onChange={handleChange}
      ></textarea>

      <br></br>
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}

export default Form;
