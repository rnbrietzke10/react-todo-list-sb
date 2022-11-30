import React from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
  return (
    <div className="todo-form-container">
      <form className="todo-form">
        <label>Enter Todo:</label>
        <input placeholder="todo" className="todo-form-input"></input>
      </form>
    </div>
  );
};

export default NewTodoForm;
