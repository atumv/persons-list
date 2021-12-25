import React from 'react';

const AgeInput = ({ageInputRef}) => (
  <input
    className="input age-input"
    type="number"
    placeholder="Age"
    ref={ageInputRef}
    max="140"
    required
  />
);

export default AgeInput;
