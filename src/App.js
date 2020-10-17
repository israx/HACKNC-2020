import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import Tutors from "./pages/tutors";
import Student from "./pages/student";
import Meet from "./pages/meet";

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
        <Route path="/meet">
          <Meet />
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
