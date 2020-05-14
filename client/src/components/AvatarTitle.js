import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

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
          <Row xs='1' md='2'>
            <Col>
              <h1 key={mood.title} className='left'>
                {mood.name}{' '}
              </h1>
            </Col>
            <Col>
              <h1>
                <div className='right'> Avatar</div>
              </h1>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AvatarTitle;
