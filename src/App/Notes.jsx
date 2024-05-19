import React, { useState } from "react";
import Note from "./Note";

//controlled component -> whose value is controlled by React state isted of allowing the DOM to manage the state
const Form = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  //filtering displayed elemnts
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    //The method does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end.
    setNewNote("write here");
  };
  //handling note change
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
    //event.target.value refers to the input value of that element
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <>
      <div className="grid justify-center gap-3">
        <h1 className="text-2xl font-bold">Notes</h1>

        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>

        <ul>
          {notesToShow.map((notes) => (
            <Note key={notes.id} note={notes} />
          ))}
        </ul>

        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default Form;
