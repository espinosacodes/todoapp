import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");

  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="TodoForm-input"
        value={value}
        placeholder="what task do you want to add?"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="TodoForm-button">
        Add Task
      </button>
    </form>
  );
};
