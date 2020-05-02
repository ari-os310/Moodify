import React from 'react';

const Reset = ({ reset }) => {
  // console.debug(props);
  // // props looks like {reset : }
  // const {reset} = props;
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