import React, { useEffect, useState } from "react";
import profile from "./images/avatar.png";

const Context = React.createContext();

function ContextProvider(props) {
  const [tutors, setTutors] = useState([]);
  const url =
    "https://raw.githubusercontent.com/israx/HACKNC-2020/master/db.json";
  const about = [
    {
      name: "Han",
      profilePicture: profile,
      info: "Info goes here",
      id: Date.now(),
    },
    {
      name: "Israel",
      profilePicture: profile,
      info: "Computer Science at Hunter College",
      id: Date.now(),
    },
    {
      name: "Sammu",
      profilePicture: profile,
      info: "info goes here",
      id: Date.now(),
    },
    {
      name: "Member 4",
      profilePicture: profile,
      info: "info goes here",
      id: Date.now(),
    },
  ];

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTutors(data);
      });
  }, []);

  return (
    <Context.Provider value={{ about, tutors }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider as Provider };
