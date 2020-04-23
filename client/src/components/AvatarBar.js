import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AvatarBar = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 key={props.mood_type} className='display-3'>
            {props.mood_type + ' Avatar'}
          </h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AvatarBar;
