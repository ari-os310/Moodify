import React from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
} from 'reactstrap';

const AddAffirmation = (props) => {
  //   const [newAffirmation, setNewAffirmation] = useState([]);
  //   const [isUpdated, setUpdated] = useState(false);

  //   const showUpdate = () => setUpdated(true);
  //   const hideUpdate = () => setUpdated(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // if () {
    //   };
    //   setNewCard('');
    //   setIsFormShown(false);
  };

  return (
    <Col>
      <Form>
        <FormGroup row>
          <Label for='addAffirmation' sm={2}></Label>
          <Col sm={10}>
            <Input type='textarea' name='text' id='textform' />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 5 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Col>
  );
};

export default AddAffirmation;
