import React from "react";
import Counter from "./App/Counter";
import Notes from "./App/Notes";

import Course from "./App/Exercises/Course";
import PhoneBook from "./App/Exercises/PhoneBook";
import axios from "axios";
import CallingApi from "./App/CallingApi";
import Parent from "./App/ChildToParent/Parent";

const App = () => {
  const book = [];

  const notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true,
    },
  ];

  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  // const promise = axios.get("http://localhost:3001/notes");
  // console.log(promise);

  // promise.then((response) => console.log(response));

  // axios
  //   .get("http://localhost:3001/notes")
  //   .then((response) => console.log(response.data));

  return (
    <>
      {/* <Counter /> */}
      {/* <Notes notes={notes} /> */}
      {/* <Course detail={courses} /> */}
      {/* <PhoneBook book={book} /> */}
      {/* <CallingApi /> */}
      <Parent />
    </>
  );
};

export default App;

/* Key -> why index should not be used as key */
/* CSS -> anyname.module.css*/
/* useEffect -> Extensive */
/* useReducer ->  */
/* useRef */
