import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import Tutors from "./pages/tutors";
import SignUp from "./pages/signup";

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
        <Route path="/tutors">
          <Tutors />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
