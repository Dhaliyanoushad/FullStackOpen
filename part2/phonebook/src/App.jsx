import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import axios from "axios";
import numService from "./services/num";
import num from "./services/num";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    numService
      .getAll()
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const sameName = persons.find((person) => person.name === newName)
      ? true
      : false;
    if (
      sameName &&
      window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      setPersons(
        persons.map((person) =>
          person.name === newName ? { ...person, number: newNum } : person
        )
      );
      numService.update(persons.find((person) => person.name === newName).id, {
        name: newName,
        number: newNum,
      });
      return;
    }
    const personObject = {
      name: newName,
      number: newNum,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNum("");

    numService.create(personObject).then((response) => {
      console.log(response);
      setPersons(persons.concat(response.data));
    });
  };

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    if (person && window.confirm(`Delete ${person.name}?`)) {
      numService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
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
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
