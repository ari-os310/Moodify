import React from 'react';

const Reset = ({ reset }) => {
  return (
    <button
      type='button'
      onClick={(event) => {
        event.preventDefault();
        reset();
      }}>
      Back Home
    </button>
  );
};

export default Reset;