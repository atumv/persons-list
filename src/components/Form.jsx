import React from 'react';
import NameInput from './NameInput';
import AgeInput from './AgeInput';
import AddBtn from './AddBtn';

const Form = ({ onSubmit, nameInputRef, ageInputRef, returnFocusToName }) => (
  <form className="form" onSubmit={onSubmit}>
    <NameInput nameInputRef={nameInputRef} />
    <AgeInput ageInputRef={ageInputRef} />
    <AddBtn onClick={returnFocusToName} />
  </form>
);

export default Form;
