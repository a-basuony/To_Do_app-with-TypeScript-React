import React from "react";

const NewTodo: React.FC = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="input">add Item</label>
      <input type="text" placeholder="Add a new todo..." id="input" />
      <button>add</button>
    </form>
  );
};

export default NewTodo;
