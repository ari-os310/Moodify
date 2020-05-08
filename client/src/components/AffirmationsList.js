import React from 'react';
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
            {/* <audio
              className={'audio'}
              src={`/affirmations/${affirmation.id}.mp3`}
              type='audio/mpeg'
            /> */}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default AffirmationsList;
