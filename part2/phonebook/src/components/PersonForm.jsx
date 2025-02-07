import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNum,
  handleNumChange,
  setFilter,
}) => {
  return (
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
  );
};

export default PersonForm;
