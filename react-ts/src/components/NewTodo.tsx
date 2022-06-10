import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {};

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
