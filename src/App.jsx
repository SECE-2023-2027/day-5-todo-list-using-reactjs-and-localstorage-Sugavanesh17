import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import IconBar from './components/IconBar';

const LOCAL_STORAGE_KEY = 'todos';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: 'brunhild', completed: false },
      { id: 2, text: 'grocery', completed: true },
      { id: 3, text: 'cleaning', completed: false },
    ];
  });
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleSave = () => {
    if (input.trim() === '') return;
    if (editId !== null) {
      setTodos(todos.map(todo => (todo.id === editId ? { ...todo, text: input } : todo)));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    }
    setInput('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setInput(todo.text);
    setEditId(id);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-start pt-10">
      <div className="bg-white rounded-xl p-8 w-full max-w-4xl shadow-2xl">
        <TodoInput input={input} setInput={setInput} handleSave={handleSave} editId={editId} />
        <div className="mb-4 font-bold text-2xl text-indigo-700">Your Todo's</div>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <IconBar />
      </div>
    </div>
  );
};

export default App;
