import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">LOGO</div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/meet">Meet our tutors</Link>
        </li>
        <li>
          <Link to="/tutors">Join Us</Link>
        </li>
        <li>
          <Link to="/student">Look for a tutor</Link>
        </li>
      </ul>
    </header>
  );
}
