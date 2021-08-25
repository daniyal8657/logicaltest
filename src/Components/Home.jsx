import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ToDoList } from "./ToDoList/ToDoList";
import { AddToDo } from "./ToDoList/AddToDo";
import "./ToDoList/ToDo.css";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

export const Home = () => {
  const [todoitems, setTodoitems] = useState(getLocalItems());
  const handleAdd = (newToDo) => {
    setTodoitems([...todoitems, newToDo]);
  };

  const handleDel = (curritem) => {
    const filtered = todoitems.filter((item) => item !== curritem);
    setTodoitems([...filtered]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todoitems));
  }, [todoitems]);

  return (
    <Card className="home">
      <Row>
        <Col>
          <AddToDo handleAdd={handleAdd} />
        </Col>
        <Col>
          <ToDoList todoitems={todoitems} handleDel={handleDel} />
        </Col>
      </Row>
    </Card>
  );
};
