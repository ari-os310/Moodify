import React, { useState } from 'react';
import { getAffirmationByMood } from '../helper-functions/moodify-db-functions';
import AffirmationsList from './AffirmationsList';
import AvatarTitle from './AvatarTitle';
import AddAffirmation from './AddAffirmation';
import { Col, Container, Row } from 'reactstrap';

const AvatarPage = (props) => {
  const mood = props.mood;
  const [affirmations, setAffirmations] = useState([]);

  const getAffirmations = () => {
    getAffirmationByMood(mood.name).then((affirmations) => {
      setAffirmations(affirmations);
    });
  };

  if (mood && !affirmations.length) {
    getAffirmations();
  } else if (affirmations[0].mood_id !== mood.id) {
    getAffirmations();
  }

  return (
    <div className='AvatarPage'>
      <AvatarTitle title={mood.name} />
      <Container fluid={true}>
        <Row xs='2'>
          <Col>
            <AffirmationsList affirmations={affirmations} />
          </Col>
          <Col>
            <AddAffirmation
              mood={mood}
              affirmations={affirmations}
              callBack={(newAffirmation) =>
                setAffirmations([...affirmations, newAffirmation])
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AvatarPage;
