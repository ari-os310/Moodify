import React, {useState} from 'react';
import { addAffirmation } from '../helper-functions/moodify-db-functions';
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
  const [newAffirmation, setNewAffirmation] = useState();
  // const [affirmations, setAffirmations] = useState(props.affirmations)
  // console.log(affirmations)

  const handleSubmit = (e) => {
    e.preventDefault();
    let userAffirmation = {
      affirmation: newAffirmation
    }
    // addAffirmation(userAffirmation).then((affirmation) => )
   console.log(userAffirmation);
  };

  const handleAffirmationChange = (e) => {
    setNewAffirmation(e.target.value);
    console.log(newAffirmation)
  }

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
