import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const addTodo = ({ todo, id }) => {
    console.log('Todo Added');
  };
  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
