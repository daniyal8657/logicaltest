import React from "react";
import { ToDoItem } from "./ToDoItem";
import { Card } from "react-bootstrap";

export const ToDoList = ({ todoitems, handleDel }) => {
  return (
    <Card className="todolist">
      <h1>To Do List</h1>
      {todoitems.map((item) => (
        <ToDoItem item={item} handleDel={handleDel} />
      ))}
    </Card>
  );
};
