import React, { useEffect, useState } from "react";
import profile from "./images/avatar.png";

const Context = React.createContext();

function ContextProvider(props) {
  const [tutors, setTutors] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );
  const url =
    "https://raw.githubusercontent.com/israx/HACKNC-2020/master/db.json";

  //-------------------------------FORM VARIABLES----------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [expertice, setExpertice] = useState("");
  const [availabilty, setAvail] = useState("");
  const [languages, setLanguages] = useState("English");
  const [description, setDescription] = useState(" ");
  const [tutorOb, setTutorOb] = useState({ id: Date.now() });
  const [on, setOn] = useState(true);

  //-----------------------------ABOUT US INFO-------------------------------
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
      name: "Yu",
      profilePicture: profile,
      info: "Electrical Engineering at University of Florida",
      id: Date.now(),
    },
  ];

  //---------------------------------FORM LOGIC----------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);

    if (name === "name") {
      setName(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(true);
    }
    if (name === "email") {
      setEmail(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(true);
    }
    if (name === "expertice") {
      setExpertice(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(true);
    }
    if (name === "availabilty") {
      setAvail(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(true);
    }
    if (name === "languages") {
      setLanguages(value);
      setTutorOb((prev) => ({ ...prev, [name]: `English and ${value}` }));
      setOn(true);
      console.log(languages);
    }
    if (name === "description") {
      setDescription(value);
      setTutorOb((prev) => ({ ...prev, [name]: value }));
      setOn(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setTutors((prev) => [...prev, tutorOb]);
    setOn((prev) => !prev);
    console.log(tutors);
    console.log(tutorOb);
    setName("");
    setEmail("");
    setExpertice("");
    setAvail("");
    setDescription("");
    setLanguages("");
  };

  //---------------------------------END FORM LOGIC----------------------------

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
      });
  }, []);

  useEffect(() => {
    //Local Storage
    window.localStorage.setItem("item", JSON.stringify(tutors));
  }, [tutors]);

  return (
    <Context.Provider
      value={{
        about,
        tutors,
        onSubmit,
        handleChange,
        name,
        availabilty,
        expertice,
        email,
        on,
        languages,
        description,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider as Provider };
