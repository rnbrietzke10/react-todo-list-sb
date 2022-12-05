import React, { useState } from 'react';
import './NewTodoForm.css';
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    todo: '',
  };
  const [todoData, setTodoData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData((todoData) => ({ ...todoData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoData.todo) {
      addTodo({ ...todoData, id: uuidv4() });
      setTodoData(INITIAL_STATE);
    }
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="todo-form-input-container">
          <label htmlFor="todo">Enter Todo:</label>
          <input
            id="todo"
            type="text"
            name="todo"
            value={todoData.todo}
            placeholder="Enter Todo Item"
            className="todo-form-input"
            onChange={handleChange}
          />
        </div>

        <button className="todo-form-submit-btn">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
