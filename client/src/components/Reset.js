import React from 'react';
import HomeButton from './HomeButton';

const Reset = ({ reset }) => {
  return (
    <div
      className='gohome'
      onClick={(event) => {
        event.preventDefault();
        reset();
      }}>
      <HomeButton />
    </div>
  );
};

export default Reset;
