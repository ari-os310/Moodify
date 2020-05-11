import React from 'react';
import { deleteAffirmation } from '../helper-functions/moodify-db-functions';
import { ListGroup, ListGroupItem } from 'reactstrap';

const AffirmationsList = (props) => {
  const onClick = (i) => {
    const audios = document.getElementsByClassName('audio');
    audios.item(i).play();
  };

  return (
    <div className='AffirmationsList'>
      <ListGroup>
        {props.affirmations.map((affirmation, i) => (
          <ListGroupItem key={i} action>
            <button className='play' onClick={() => onClick(i)}>
              {affirmation.affirmation}
            </button>

            <audio
              className={'audio'}
              src={`/affirmations/${affirmation.id}.mp3`}
              type='audio/mpeg'
            />

            <button
              onClick={() =>
                deleteAffirmation(affirmation.id, props.deleteAffirmation)
              }
              className='close'
              type='button'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default AffirmationsList;
