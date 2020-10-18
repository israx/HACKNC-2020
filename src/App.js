import React from "react";
import "./App.css";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import Tutors from "./pages/tutors";
import Student from "./pages/student";
import Meet from "./pages/meet";
import TutorInfo from "./pages/tutorInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/meet">
          <Meet />
        </Route>
        <Route path="/meet/:id">
          <TutorInfo />
        </Route>
        <Route path="/tutors">
          <Tutors />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
