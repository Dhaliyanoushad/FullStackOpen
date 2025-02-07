import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/person")
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      num: newNum,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNum("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} persons={persons} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNum={newNum}
        handleNumChange={handleNumChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
