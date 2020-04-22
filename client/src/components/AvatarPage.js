import React from 'react';
import AvatarBar from './AvatarBar';
import AffirmationsList from './AffirmationsList';

const AvatarPage = (props) => {
  return (
    <div className='AvatarPage'>
      <AvatarBar />
      <AffirmationsList affirmations={props.affirmations} />
    </div>
  );
};

export default AvatarPage;
