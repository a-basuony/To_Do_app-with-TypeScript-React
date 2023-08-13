// TodoList.tsx
import React from "react";
import TodoItem from "./TodoItem";

//array of objects
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  //todos is array =>[] of objects=> Todo
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
