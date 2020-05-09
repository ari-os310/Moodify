import React, { useState } from 'react';
import {
  addAffirmation,
  getAffirmationByMood,
} from '../helper-functions/moodify-db-functions';
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const AddAffirmation = (props) => {
  const mood = props.mood;
  const [newAffirmation, setNewAffirmation] = useState();
  const [affirmations, setAffirmations] = useState(props.affirmations);
  const [inputValue, setInputValue] = useState(newAffirmation);
  // console.log(affirmations)

  const handleAffirmationChange = (e) => {
    setNewAffirmation(e.target.value);
    console.log(newAffirmation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userAffirmation = {
      affirmation: newAffirmation,
      mood: mood.id,
    };
    addAffirmation(userAffirmation).then((affirmation) => {
      setAffirmations(affirmation);
    });
    // }

    setInputValue('');

    // if (props.mood && affirmations) {
    //   getAffirmationByMood(mood.name).then((affirmations) => {
    //     setAffirmations(affirmations);
    //   });
    // }
  };

  return (
    <Col>
      <Card id='addaffirmation'>
        <CardHeader id='addaffirmation' tag='h3'>
          Add Your Own
        </CardHeader>
        <CardBody id='addaffirmation'>
          <Form>
            <FormGroup row>
              <Label for='personal' sm={2}></Label>
              <Col sm={10}>
                <Input
                  type='textarea'
                  id='textform'
                  placeholder='Want to save an affirmation for later? Go Ahead!'
                  onChange={handleAffirmationChange}
                  value={inputValue}
                />
              </Col>
            </FormGroup>

            <FormGroup check row>
              <Col sm={{ size: 10, offset: 5 }}>
                <Button onClick={handleSubmit}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddAffirmation;
