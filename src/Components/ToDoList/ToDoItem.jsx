import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

export const ToDoItem = ({ item, handleDel }) => {
  const [check, setCheck] = useState(false);
  return (
    <Card className="todoitem">
      <Row>
        <Col md={2}>
          <Form.Check onClick={() => setCheck(!check)}></Form.Check>
        </Col>
        <Col md={8}>
          <Form.Label>{check ? <del>{item}</del> : item}</Form.Label>
        </Col>
        <Col>
          <Button onClick={() => handleDel(item)} className="delbtn">
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
