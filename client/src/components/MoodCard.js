import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const MoodCard = ({ mood, onClick }) => {
  const { mood_avatar, mood_blurb, mood_type } = mood;
  return (
    <Col xs='6' sm='4'>
      <br />
      <Card onClick={() => onClick(mood)}>
        <CardBody className='text-center'>
          <CardTitle>{mood_type}</CardTitle>
          <CardImg
            className='avatar'
            src={mood_avatar}
            alt={mood_type + ' avatar'}
          />
          <CardText>{mood_blurb}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MoodCard;
