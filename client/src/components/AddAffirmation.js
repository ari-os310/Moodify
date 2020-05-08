import React from 'react';
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
  //   const [isUpdated, setUpdated] = useState(false);

  //   const showUpdate = () => setUpdated(true);
  //   const hideUpdate = () => setUpdated(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userAffirmation = {
      affirmation: newAffirmation,
      
    }
    // if () {
    //   };
    //   setNewCard('');
    //   setIsFormShown(false);
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
                  name='text'
                  id='textform'
                  placeholder='Want to save an affirmation for later? Go Ahead!'
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
