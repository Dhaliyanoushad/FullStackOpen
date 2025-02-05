import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "555-578347343" },
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
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
  const [filter, setFilter] = useState("");
  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with:{" "}
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search === ""
        ? null
        : persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => {
              return (
                <li key={person.name}>
                  {person.name} : {person.number}
                </li>
              );
            })}
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input type="number" value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
          <div>
            filter shown with:{" "}
            <input onChange={(event) => setFilter(event.target.value)} />
          </div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} {person.num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
