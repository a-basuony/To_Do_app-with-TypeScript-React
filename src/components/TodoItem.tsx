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
    <li style={{ textDecoration: completed ? "line-through" : "none" }}>
      {text}
      <button onClick={onToggle}>{completed ? "Undo" : "Complete"}</button>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;
