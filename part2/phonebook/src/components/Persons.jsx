import React from "react";

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} {person.num}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
