import React from 'react';

const NameInput = ({nameInputRef}) => (
  <input
    className="input name-input"
    type="text"
    placeholder="Name"
    ref={nameInputRef}
    maxLength="30"
    required
  />
);

export default NameInput;
