import React, { useContext } from "react";
import { Context } from "../Context";
import "./assets/css/style.css";
// import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.css";
import "./assets/vendor/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/remixicon/remixicon.css"
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css"

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
