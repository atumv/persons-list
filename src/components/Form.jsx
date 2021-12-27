import React from 'react';
import NameInput from './NameInput';
import AgeInput from './AgeInput';
import AddBtn from './AddBtn';

const Form = ({ onSubmit, nameInputRef, ageInputRef }) => (
  <form className="form" onSubmit={onSubmit}>
    <NameInput nameInputRef={nameInputRef} />
    <AgeInput ageInputRef={ageInputRef} />
    <AddBtn />
  </form>
);

export default Form;
