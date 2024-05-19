import React, { useState } from "react";

const PhoneBook = (props) => {
  const [persons, setPersons] = useState(props.book);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    console.log(personObject);
    setNewName("");
    setNewNumber("");
  };

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <>
      <div className="grid justify-center gap-4">
        <h2 className="font-bold">Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            name:
            <input className="border" onChange={handleInput} value={newName} />
          </div>
          <div>
            number:
            <input
              className="border"
              onChange={handleNumber}
              value={newNumber}
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h2 className="font-bold">Numbers</h2>
        <ul>
          {persons.map((contact) => (
            <li key={contact.id}>
              {contact.name} {contact.number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PhoneBook;
