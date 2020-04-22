import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class MoodCard extends Component {
  render() {
    const { mood_avatar, mood_blurb, mood_type } = this.props.mood;
    return (
      <Col xs='6' sm='4'>
        <br />
        <Card
          // tag='a'
          onClick={() => console.log({ mood_type })}>
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
  }
}

export default MoodCard;
