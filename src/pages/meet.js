import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import headshot from "../images/avatar.png";
export default function Meet() {
  const { tutors } = useContext(Context);

  const tutorsMap = tutors.map((tutor) => (
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
    <div>
      <h1>Meet our Tutors</h1>
      <div className="users-container">{tutorsMap}</div>
    </div>
  );
}
