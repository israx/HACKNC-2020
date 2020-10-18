import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import "../pages/assets/css/style.css";
// import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "../pages/assets/img/favicon.png";
import "../pages/assets/img/apple-touch-icon.png";
import "../pages/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../pages/assets/vendor/bootstrap/css/bootstrap.css";
import "../pages/assets/vendor/bootstrap/css/bootstrap-reboot.min.css";
import "../pages/assets/vendor/icofont/icofont.min.css";
import "../pages/assets/vendor/boxicons/css/boxicons.min.css"
import "../pages/assets/vendor/remixicon/remixicon.css"
import "../pages/assets/vendor/owl.carousel/assets/owl.carousel.min.css"

export default function Header() {
  return (
      <header>
        <div className="container d-flex align-items-center">
          <h1 className="logo">
            <Link to="/"> <strong>RT Tutor</strong></Link>
          </h1>
          <nav className="nav-menu d-none d-lg-block">
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
          </nav>

        </div>
      </header>

    //
    // <header className="fixed-top">
    //   <div className="logo">LOGO</div>
    //   <ul className="nav">
    //     <li>
    //       <Link to="/">Homess</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/meet">Meet our tutors</Link>
    //     </li>
    //     <li>
    //       <Link to="/tutors">Join Us</Link>
    //     </li>
    //     <li>
    //       <Link to="/student">Look for a tutor</Link>
    //     </li>
    //   </ul>
    // </header>

  );
}
