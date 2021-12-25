import React from 'react';
import RemoveBtn from './RemoveBtn';

const PersonsList = ({ data, removePerson }) => (
  <ul className="persons-list">
    {data.getPersons.map((person) => (
      <li className="person" key={person.id} id={person.id.toString()}>
        {person.name}, {person.age}
        <RemoveBtn onClick={removePerson} />
      </li>
    ))}
  </ul>
);

export default PersonsList;
