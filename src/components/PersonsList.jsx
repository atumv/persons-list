import React from 'react';

const PersonsList = ({data}) => (
  <ul className="persons-list">
    {data.getPersons.map((person) => (
      <li className="person" key={person.id}>
        {person.name}, {person.age}
      </li>
    ))}
  </ul>
);

export default PersonsList;
