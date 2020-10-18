import React from "react";
import "./assets/css/style.css";
// import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.css";
import "./assets/vendor/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
// import "./assets/vendor/aos/aos.css"

// control option f

export default function Home() {
  return (
    <div className="home">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Real Time Tutor- Index</title>
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
        <header className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
              <a href="index.html">Mentor</a>
            </h1>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
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
                <li className="drop-down">
                  <a href="">Drop Down</a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li className="drop-down">
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

            <a href="courses.html" className="get-started-btn">
              Get Started
            </a>
          </div>
        </header>

        <section
          id="hero"
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="container position-relative"
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
            <a href="courses.html" className="btn-get-started">
              Get Started
            </a>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              <p>About Us</p>
            </div>

            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate trideta storacalaperda
                    mastiro dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate
                </p>
                <a href="about.html" className="learn-more-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts section-bg">
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1232</span>
                <p>Students</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">64</span>
                <p>Courses</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">42</span>
                <p>Events</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">15</span>
                <p>Trainers</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose Mentor?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit Asperiores
                    dolores sed et. Tenetur quia eos. Autem tempore quibusdam
                    vel necessitatibus optio ad corporis.
                  </p>
                  <div className="text-center">
                    <a href="about.html" className="more-btn">
                      Learn More <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-8 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Ullamco laboris ladore pan</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>RTT</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
