import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const inputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredInputText = inputTextRef.current?.value;

    if (enteredInputText?.trim().length === 0) {
      //throw new Error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="input">add Item</label>
      <input
        type="text"
        placeholder="Add a new todo..."
        id="input"
        ref={inputTextRef}
      />
      <button>add</button>
    </form>
  );
};

export default NewTodo;
