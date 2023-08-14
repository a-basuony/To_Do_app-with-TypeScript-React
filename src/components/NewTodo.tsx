import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddItem: (text: string | undefined) => void }> = (
  props
) => {
  const inputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredInputText = inputTextRef.current?.value;

    if (enteredInputText?.trim().length === 0) {
      //throw new Error
      return;
    }

    props.onAddItem(enteredInputText);
  };

  return (
    <form onSubmit={submitHandler} className="from">
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
