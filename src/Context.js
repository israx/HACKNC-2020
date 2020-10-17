import React from "react";
import profile from "./images/avatar.png";

const Context = React.createContext();

function ContextProvider(props) {
  const about = [
    {
      name: "Israel",
      profilePicture: profile,
      info: "Student of Computer Science at Western University",
    },
    {
      name: "Fletch",
      profilePicture: profile,
      info: "Electrical Engineering at FIU",
    },
    {
      name: "Han",
      profilePicture: profile,
      info: "Computer Systems Technology student at BCIT",
    },
    {
      name: "Sarah",
      profilePicture: profile,
      info: "Student of Computer Science at Hunter College",
    },
  ];
  return (
    <Context.Provider value={{ about }}>{props.children}</Context.Provider>
  );
}

export { Context, ContextProvider as Provider };
