import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const AffirmationsList = (props) => {
  return (
    <div className='AffirmationsList'>
      <br />
      <ListGroup>
        <ListGroupItem tag='button' action>
          Affirmation 1
        </ListGroupItem>
        <ListGroupItem tag='button' action>
          Affirmation 2
        </ListGroupItem>
        <ListGroupItem tag='button' action>
          Affirmation 3
        </ListGroupItem>
        <ListGroupItem tag='button' action>
          Affirmation 4
        </ListGroupItem>
        <ListGroupItem tag='button' action>
          Affirmation 5
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default AffirmationsList;
