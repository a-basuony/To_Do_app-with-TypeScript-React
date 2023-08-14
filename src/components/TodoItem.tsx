// TodoItem.tsx
import React from "react";

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  onToggle,
  onRemove,
}) => {
  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <div className="todo-text" onClick={onToggle}>
        {text}
      </div>
      <button id="complete-button" onClick={onToggle}>
        {completed ? "Undo" : "Complete"}
      </button>
      <button id="remove-button" onClick={onRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
