import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const AffirmationsList = (props) => {
  return (
    <div className='AffirmationsList'>
      {/* <br /> */}
      <ListGroup>
        {props.affirmations.map((affirmation, i) => (
          <ListGroupItem key={i} tag='button' action>
            {affirmation.affirmation}
            <audio controls>
               {/*id={`affirmation-audio-${affirmation.id}`}  */}
            <source src={`/affirmations/${affirmation.id}.mp3`} type="audio/mpeg" />
            </audio>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default AffirmationsList;
