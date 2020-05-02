import React from 'react';

const Reset = ({ reset }) => {
  return (
    <button
      type='button'
      onClick={(event) => {
        event.preventDefault();
        reset();
      }}>
      Reset
    </button>
  );
};

export default Reset;