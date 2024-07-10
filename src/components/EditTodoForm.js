import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    editTodo(value, task.id);

  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="TodoForm-input"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="TodoForm-button">
        Update Task
      </button>
    </form>
  );
};

