import React from 'react';
import AvatarBar from './AvatarBar';
import AffirmationsList from './AffirmationsList';

const AvatarPage = (props) => {
  const mood = props.mood;
  const affirmations = [
    'Affirmation1',
    'Affirmation2Affirmation',
    'Affirmation3',
    'Affirmation4',
    'Affirmation5',
  ];
  return (
    <div className='AvatarPage'>
      <AvatarBar mood_type={mood.mood_type} />
      <AffirmationsList affirmations={affirmations} />
    </div>
  );
};

export default AvatarPage;
