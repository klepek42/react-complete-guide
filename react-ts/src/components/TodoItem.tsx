import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

interface Props {
  todo: Todo;
  name: string;
}

const TodoItem = ({ todo }: Props) => {
  const { id, text } = todo;
  return (
    <li className={classes.item} key={id}>
      {text}
    </li>
  );
};

export default TodoItem;
