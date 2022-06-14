import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

interface Props {
  todo: Todo;
  name: string;
  onRemoveTodo: () => void;
}

const TodoItem = (props: Props) => {
  const { id, text } = props.todo;

  return (
    <li className={classes.item} key={id} onClick={props.onRemoveTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
