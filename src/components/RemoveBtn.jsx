import React from 'react';

const RemoveBtn = ({onClick}) => (
  <button className="remove-btn" onClick={onClick}>
    &times;
  </button>
);

export default RemoveBtn;
