import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, handleEdit, handleDelete }) => {
  return (
    <ul className="divide-y divide-indigo-200">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
