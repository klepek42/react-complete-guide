import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item: Todo) => (
        <TodoItem todo={item} name={"test"} />
      ))}
    </ul>
  );
};

export default Todos;
