import React, { useState } from 'react';
import { getAffirmationByMood } from '../helper-functions/moodify-db-functions';
import AffirmationsList from './AffirmationsList';
import AvatarTitle from './AvatarTitle';

const AvatarPage = (props) => {
  const mood = props.mood;
  const [affirmations, setAffirmations] = useState([]);

  const getAffirmations = () => {
    getAffirmationByMood(mood.name).then((affirmations) => {
      setAffirmations(affirmations);
    });
  };

  if (mood && !affirmations.length) {
    getAffirmations();
  } else if (affirmations[0].mood_id !== mood.id) {
    getAffirmations();
  }

  return (
    <div className='AvatarPage'>
      <AvatarTitle title={mood.name} />
      <AffirmationsList affirmations={affirmations} />
    </div>
  );
};

export default AvatarPage;
