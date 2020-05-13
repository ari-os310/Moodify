import React, { useState } from 'react';
import { getAffirmationByMood } from '../helper-functions/moodify-db-functions';
import AffirmationsList from './AffirmationsList';
import AvatarTitle from './AvatarTitle';
import AddAffirmation from './AddAffirmation';
import Reset from './Reset';
import { Col, Container, Row } from 'reactstrap';

const AvatarPage = (props) => {
  const mood = props.mood;
  const [affirmations, setAffirmations] = useState([]);

  const getAffirmations = () => {
    getAffirmationByMood(mood.name).then((affirmations) => {
      setAffirmations(affirmations);
    });
  };

  const deleteAffirmation = (id) => {
    setAffirmations(affirmations.filter((aff) => aff.id !== id));
  };

  if (mood && !affirmations.length) {
    getAffirmations();
  } else if (affirmations[0].mood_id !== mood.id) {
    getAffirmations();
  }

  const style = {
    backgroundColor: `${mood.accent}`,
  };

  return (
    <div className='AvatarPage' style={style}>
      <AvatarTitle mood={mood} />
      <Container fluid={true}>
        <Row xs='1' md='2'>
          <Col>
            <AffirmationsList
              affirmations={affirmations}
              deleteAffirmation={deleteAffirmation}
            />
          </Col>
          <Col>
            <AddAffirmation
              mood={mood}
              affirmations={affirmations}
              callBack={(newAffirmation) =>
                setAffirmations([...affirmations, newAffirmation])
              }
            />
            <div className='reset'>
              <Reset reset={props.reset} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AvatarPage;
