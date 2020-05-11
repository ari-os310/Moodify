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
          <ListGroupItem key={i} tag='button' action onClick={() => onClick(i)}>
            {affirmation.affirmation}
            <audio
              className={'audio'}
              src={`/affirmations/${affirmation.id}.mp3`}
              type='audio/mpeg'
            /> */}
            <button
              onClick={() => deleteAffirmation(i)}
              className='delete'
              type='button'
              class='close'
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
