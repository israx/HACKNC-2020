import React from "react";
import "./assets/css/style.css";

export default function Home() {
  return (
    <div className="home">
      <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Mentor Bootstrap Template - Index</title>
        <meta content="" name="descriptison" />
        <meta content="" name="keywords" />

        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />

        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link
          href="assets/vendor/owl.carousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/animate.css/animate.min.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />

        <link href="assets/css/style.css" rel="stylesheet" />
      </head>

      <body>
        <header id="header" class="fixed-top">
          <div class="container d-flex align-items-center">
            <h1 class="logo mr-auto">
              <a href="index.html">Mentor</a>
            </h1>
            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li class="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="courses.html">Courses</a>
                </li>
                <li>
                  <a href="trainers.html">Trainers</a>
                </li>
                <li>
                  <a href="events.html">Events</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li class="drop-down">
                  <a href="">Drop Down</a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li class="drop-down">
                      <a href="#">Deep Drop Down</a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>

            <a href="courses.html" class="get-started-btn">
              Get Started
            </a>
          </div>
        </header>

        <section
          id="hero"
          class="d-flex justify-content-center align-items-center"
        >
          <div
            class="container position-relative"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h1>
              Learning Today,
              <br />
              Leading Tomorrow
            </h1>
            <h2>
              We are team of talanted designers making websites with Bootstrap
            </h2>
            <a href="courses.html" class="btn-get-started">
              Get Started
            </a>
          </div>
        </section>
      </body>
    </div>
  );
}
