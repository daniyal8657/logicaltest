import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

export const AddToDo = ({ handleAdd }) => {
  const [newtodo, setNewTodo] = useState("");

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && handleAdd(newtodo));
    e.stopPropagation();
  });

  return (
    <Card className="addtodo">
      <h1>Add To DO</h1>
      <Row>
        <Col md={10}>
          <Form.Control
            type="text"
            value={newtodo}
            onChange={(e) => setNewTodo(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handleAdd(newtodo);
              setNewTodo("");
            }}
            disabled={newtodo === ""}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
