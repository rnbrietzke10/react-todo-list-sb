import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const addTodo = ({ todo, id }) => {
    setTodoItems((todoItems) => [...todoItems, { todo, id }]);
  };

  const removeTodo = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };
  const todoListItems = (
    <ul className="todoItem-container">
      {todoItems.map(({ todo, id }) => (
        <TodoItem todo={todo} key={id} id={id} removeItem={removeTodo} />
      ))}
    </ul>
  );
  return (
    <div className="todoList-container">
      <h1>TODO LIST</h1>
      <NewTodoForm addTodo={addTodo} />
      {todoItems.length > 0 ? todoListItems : ''}
    </div>
  );
};

export default TodoList;
