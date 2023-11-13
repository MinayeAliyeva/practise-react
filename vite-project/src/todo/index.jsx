import React from "react";
// import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const TodoApp = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={5}>
          <Form.Control
          placeholder="add todos here..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <Button variant="primary">Primary</Button>{' '}
        </Col>
        </Row>

        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
       
      </Container>
    </div>
  );
};

export default TodoApp;
