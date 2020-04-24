import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const AffirmationsList = (props) => {
  return (
    <div className='AffirmationsList'>
      <br />
      <ListGroup>
        {props.affirmations.map((affirmation) => (
          <ListGroupItem key={affirmation.id} tag='button' action>
            {affirmation.affirmation}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default AffirmationsList;
