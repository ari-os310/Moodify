import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const AvatarTitle = ({ mood }) => {
  const { avatar, color, trim, taccent, title, name } = mood;

  const style = {
    backgroundColor: `${color}`,
    backgroundImage: `url(${avatar})`,
    borderColor: `${trim}`,
    color: `${taccent}`,
  };

  return (
    <div>
      <Jumbotron fluid style={style}>
        <Container fluid>
          <Row xs='1' md='2'>
            <Col>
              <h1 key={title} className='left'>
                {name}{' '}
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
