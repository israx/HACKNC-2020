import React, { useContext } from "react";
import { Context } from "../Context";

export default function About() {
  const { about } = useContext(Context);
  console.log(about);
  const aboutMap = about.map((person) => (
    <div className="user-card">
      <img
        src={person.profilePicture}
        alt="profile-picture"
        style={{ width: 150, borderRadius: "1000px" }}
      />
      <h1>{person.name}</h1>
      <p>{person.info}</p>
    </div>
  ));

  return (
    <div>
      <h1>Meet the team</h1>
      <p>This project is a collaboration with the following programmers:</p>
      <div className="users-container">{aboutMap}</div>
    </div>
  );
}
