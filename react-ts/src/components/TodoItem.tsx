import React from "react";
import Todo from "../models/todo";

interface Props {
  todo: Todo;
  name: string;
}

const TodoItem = ({ todo }: Props) => {
  const { id, text } = todo;
  return <li key={id}>{text}</li>;
};

export default TodoItem;
