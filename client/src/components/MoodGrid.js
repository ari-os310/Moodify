import React, { Component } from 'react';
import MoodCard from './MoodCard';
import { Row } from 'reactstrap';

class MoodGrid extends Component {
  render() {
    return (
      <div className='container'>
        <Row>
          {this.props.moods.map((mood) => (
            <MoodCard key={mood.id} mood={mood} />
          ))}
        </Row>
      </div>
    );
  }
}

export default MoodGrid;
