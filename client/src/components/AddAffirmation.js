import React, { useState } from 'react';
import { addAffirmation } from '../moodify-db-helpers';
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

  const handleAffirmationChange = (e) => {
    setNewAffirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAffirmation) {
      let userAffirmation = {
        affirmation: newAffirmation,
        mood: mood.id,
      };
      addAffirmation(userAffirmation).then((affirmations) =>
        props.callBack(affirmations)
      );
    }
    setNewAffirmation('');
  };

  const onKeyPress = (e) => {
    if (e.which === 13) {
      handleSubmit(e);
    }
  };

  return (
    <Col>
      <Card id='addaffirmation' className='addaffirmation'>
        <CardHeader id='addaffirmation' tag='h3'>
          Add Your Own
        </CardHeader>
        <CardBody id='addaffirmation'>
          <Form>
            <FormGroup row>
              <Label for='personalaffirmation' sm={2}></Label>
              <Col className='textform' sm={10}>
                <Input
                  type='textarea'
                  id='textform'
                  placeholder='Want to save an affirmation for later? Go Ahead!'
                  onChange={handleAffirmationChange}
                  value={newAffirmation}
                  onKeyPress={onKeyPress}
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
