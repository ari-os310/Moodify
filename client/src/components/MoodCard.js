import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const MoodCard = ({ mood, onClick }) => {
  const { avatar, blurb, name } = mood;
  return (
    <Col xs='6' sm='4'>
      <br />
      <Card onClick={() => onClick(mood)}>
        <CardBody className='text-center'>
          <CardTitle>{name}</CardTitle>
          <CardImg
            className='avatar'
            src={avatar}
            alt={mood + ' avatar'}
          />
          <CardText>{blurb}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MoodCard;
