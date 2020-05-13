import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AvatarTitle = (props) => {
  const mood = props.mood;
  const style = {
    backgroundColor: `${mood.color}`,
    backgroundImage: `url(${mood.avatar})`,
    borderColor: `${mood.trim}`,
    color: `${mood.taccent}`,
  };

  return (
    <div>
      <Jumbotron fluid style={style}>
        <Container fluid>
          <h1 key={mood.title} className='left'>
            {mood.name} <div className='right'> Avatar</div>
          </h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AvatarTitle;
