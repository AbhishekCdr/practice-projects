import React from "react";

const Course = ({ detail }) => {
  let sum0 = 0;
  detail[0].parts.map((notes) => {
    sum0 += notes.exercises;
  });
  let sum1 = 0;
  detail[1].parts.map((notes) => {
    sum1 += notes.exercises;
  });

  return (
    <div>
      <h1 style={{ "font-weight": "bold" }}>{detail[0].name}</h1>
      <ul>
        {detail[0].parts.map((notes) => (
          <li key={notes.id}>
            {notes.name} {notes.exercises}
          </li>
        ))}
      </ul>
      <h2>total of {sum0} Exercises</h2>

      <h1 style={{ "font-weight": "bold" }}>{detail[1].name}</h1>
      <ul>
        {detail[1].parts.map((notes) => (
          <li key={notes.id}>
            {notes.name} {notes.exercises}
          </li>
        ))}
      </ul>
      <h2>total of {sum1} Exercises</h2>
    </div>
  );
};

export default Course;
