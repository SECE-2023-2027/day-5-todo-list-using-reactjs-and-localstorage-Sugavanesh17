import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoItem = ({ todo, toggleComplete, handleEdit, handleDelete }) => {
  return (
    <li className="flex items-center justify-between mb-3 p-3 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="accent-purple-600 w-5 h-5"
        />
        <span className={`select-none text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {todo.text}
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleEdit(todo.id)}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition shadow"
          aria-label="Edit todo"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition shadow"
          aria-label="Delete todo"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
