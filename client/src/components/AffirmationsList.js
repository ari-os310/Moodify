import React from 'react';
import { deleteAffirmation } from '../moodify-db-helpers';
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
            {/* eslint-disable-next-line */}
            <a className='play' onClick={() => onClick(i)}>
              {affirmation.affirmation}
            </a>
            <audio
              className={'audio'}
              src={`/affirmations/${affirmation.id}.mp3`}
              type='audio/mpeg'
            />

            {/* eslint-disable-next-line */}
            <a
              onClick={() =>
                deleteAffirmation(affirmation.id, props.deleteAffirmation)
              }
              className='delete'
              aria-label='Close'>
              <span className='x'>X</span>
            </a>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default AffirmationsList;
