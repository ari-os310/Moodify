import React, { useState } from 'react';
import { getAffirmationByMood } from '../helper-functions/moodify-db-functions';
import AvatarBar from './AvatarBar';
import AffirmationsList from './AffirmationsList';

const AvatarPage = (props) => {
  const mood = props.mood;
  const [affirmations, setAffirmations] = useState([]);

  if (mood && affirmations.length === 0) {
    getAffirmationByMood(mood.name).then((affirmations) => {
      setAffirmations(affirmations);
    });
  }

  return (
    <div className='AvatarPage'>
      <AvatarBar mood_type={mood.name} />
      <AffirmationsList affirmations={affirmations} />
    </div>
  );
};

export default AvatarPage;
