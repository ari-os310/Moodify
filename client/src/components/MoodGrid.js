import React from 'react';
import MoodCard from './MoodCard';
import { Row } from 'reactstrap';

const MoodGrid = (props) => {
  return (
    <div className='container'>
      <Row>
        {props.moods.map((mood) => (
          <MoodCard key={mood.mood_id} mood={mood} />
        ))}
      </Row>
    </div>
  );
};

export default MoodGrid;
