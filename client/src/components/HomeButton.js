import React from 'react';

const HomeButton = () => {
  return (
    <div>
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

export default HomeButton;
