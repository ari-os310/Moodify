import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const AffirmationsList = (props) => {
  // const onClick = (affirmation) => {
  //   var x = affirmation.id;
  //   x.volume = 0.05;
  //   x.play();
  // };

  return (
    <div className='AffirmationsList'>
      <ListGroup>
        {props.affirmations.map((affirmation, i) => (
          <ListGroupItem key={i} tag='button' action>
            {affirmation.affirmation}
            <audio controls>
              <source
                src={`/affirmations/${affirmation.id}.mp3`}
                type='audio/mpeg'
              />
            </audio>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default AffirmationsList;
