import React from 'react';
import { FaSkull, FaTrashAlt } from 'react-icons/fa';

const IconBar = () => {
  return (
    <div className="flex justify-end space-x-6 mt-6">
      <FaSkull className="text-pink-600 cursor-pointer hover:text-pink-800 transition" title="Skull Icon" />
      <FaTrashAlt className="text-indigo-600 cursor-pointer hover:text-indigo-800 transition" title="Trash Icon" />
    </div>
  );
};

export default IconBar;
