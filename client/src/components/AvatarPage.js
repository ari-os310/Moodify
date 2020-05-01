import React, { useState } from 'react';
import { getAffirmationByMood } from '../helper-functions/moodify-db-functions';
import AffirmationsList from './AffirmationsList';
import AvatarTitle from './AvatarTitle';

const AvatarPage = (props) => {
  const mood = props.mood;
  const [affirmations, setAffirmations] = useState([]);

  if (mood && affirmations.length === 0) {
    getAffirmationByMood(mood.name).then((affirmations) => {
      setAffirmations(affirmations);
    });
  } else if (affirmations[0].mood_id !== mood.id) {
    getAffirmationByMood(mood.name).then((affirmations) => {
      setAffirmations(affirmations);
    });
  }

  return (
    <div className='AvatarPage'>
      <AvatarTitle title={mood.name} />
      <AffirmationsList affirmations={affirmations} />
    </div>
  );
};

export default AvatarPage;
