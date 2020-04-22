import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AvatarBar = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          {/* <a name={props.mood_type}> */}
          {/* <a name="currentMood"> */}
          <h1 key={props.mood_type} className='display-3'>
            {props.mood_type + ' Avatar'}
          </h1>
          {/* </a> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AvatarBar;
