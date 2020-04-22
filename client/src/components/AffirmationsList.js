import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const AffirmationsList = (props) => {
  return (
    <div className='AffirmationsList'>
      <br />
      <ListGroup>
        {props.affirmations.map((affirmation) => (
          <ListGroupItem tag='button' action>
            {affirmation}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default AffirmationsList;
