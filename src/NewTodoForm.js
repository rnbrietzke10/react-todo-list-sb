import React, { useState } from 'react';
import './NewTodoForm.css';
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = () => {
  const [formData, setFormData] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  return (
    <div className="todo-form-container">
      <form className="todo-form">
        <label htmlFor="todo">Enter Todo:</label>
        <input
          id="todo"
          type="text"
          name="todo"
          value={formData.todo}
          placeholder="Enter Todo Item"
          className="todo-form-input"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default NewTodoForm;
