import React from 'react';
import MoodCard from './MoodCard';
import { Row } from 'reactstrap';

const MoodGrid = (props) => {
  return (
    <div className='container'>
      <Row>
        {props.moods.map((mood, i) => (
          <MoodCard
            onClick={(mood) => props.onClick(mood)}
            key={i}
            mood={mood}
          />
        ))}
      </Row>
    </div>
  );
};

export default MoodGrid;
