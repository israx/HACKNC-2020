import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import headshot from "../images/avatar.png";

export default function TutorInfo() {
  const { id } = useParams();
  const { tutors } = useContext(Context);

  const tutor = tutors.map((tutor) => {
    if (tutor.id == id) {
      return (
        <div key={tutor.id}>
          <img
            src={headshot}
            alt="headshot"
            style={{ width: 150, borderRadius: "1000px" }}
          />
          <h1>{tutor.name}</h1>
          <p>{tutor.description}</p>
          <p>{tutor.expertice}</p>
          <p>{tutor.availability}</p>
          <p>{tutor.languages}</p>
        </div>
      );
    }
  });

  return <div>{tutor}</div>;
}
