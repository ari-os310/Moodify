import React from 'react';

const Reset = ({ reset }) => {
  return (
    <div
      className='gohome'
      onClick={(event) => {
        event.preventDefault();
        reset();
      }}>
      <input
        className='home'
        type='image'
        src='https://bit.ly/2WrFkp8'
        alt='Go Home'
      />
      <span className='hometxt'>Take Me Home</span>
    </div>
  );
};

export default Reset;
