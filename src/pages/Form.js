import React, { useState, useContext } from "react";
import { Context } from "../Context";

function Form() {
  const {
    onSubmit,
    handleChange,
    name,
    availabilty,
    expertice,
    email,
    on,
    languages,
    description,
  } = useContext(Context);

  return (
    <form>
      <div>
        {on ? (
          " "
        ) : (
          <h3 className="Join-message">
            Thanks for being part of change and welcome to our team of tutors.{" "}
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
