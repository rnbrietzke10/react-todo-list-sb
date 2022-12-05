import React from 'react';
import './TodoItem.css';
const TodoItem = ({ todo, id, removeItem }) => {
  const handleRemove = () => removeItem(id);
  return (
    <li className="todoItem" key={id}>
      <div>{todo}</div>
      <button className="todoItem-remove-btn" onClick={handleRemove}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
