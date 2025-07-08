import React from 'react';

const TodoInput = ({ input, setInput, handleSave, editId }) => {
  return (
    <div className="mb-6 flex items-center space-x-3">
      <label className="font-semibold text-indigo-700 text-lg">Add a Todo</label>
      <input
        type="text"
        placeholder="Enter your todo here..."
        className="flex-grow rounded-lg px-4 py-3 border border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition shadow-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 transition shadow-lg"
      >
        {editId !== null ? 'Update' : 'Add'}
      </button>
    </div>
  );
};

export default TodoInput;
