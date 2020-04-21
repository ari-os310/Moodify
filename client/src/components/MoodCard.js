import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class MoodCard extends Component {
  render() {
    const { mood_avatar, click_me, mood_type } = this.props.mood;
    return (
      <Col xs='4'>
        <Card style={{ width: '15rem' }}>
          <CardImg
            className='avatar'
            src={mood_avatar}
            alt={mood_type+" avatar"} 
          />
          <CardBody>
            <CardTitle>{mood_type}</CardTitle>
            <CardText>{click_me}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default MoodCard;
