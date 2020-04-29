import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AvatarTitle = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 key={props.title} className='display-3'>
            {props.title + ' Avatar'}
          </h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AvatarTitle;
