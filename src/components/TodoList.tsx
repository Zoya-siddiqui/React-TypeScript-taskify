import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

interface Props {
  todos: Todo[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  handleToggleDone: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, handleEdit, handleDelete, handleToggleDone }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto px-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`min-w-80 rounded-xl shadow-lg p-4 flex flex-col justify-between transition-transform duration-200 hover:scale-105
            ${todo.isDone ? 'bg-green-600' : 'bg-blue-900'} text-white`}
        >
          <p className={`text-lg mb-4 break-words ${todo.isDone ? 'line-through opacity-60' : ''}`}>
            {todo.todo}
          </p>

          <div className="flex justify-between text-xl font-medium">
            <button onClick={() => handleEdit(todo.id)} className="hover:text-yellow-300"><CiEdit /></button>
            <button onClick={() => handleDelete(todo.id)} className="text-red-500 hover:text-red-400"><MdDelete /></button>
            <button onClick={() => handleToggleDone(todo.id)} className="text-green-300 hover:text-green-400"><IoCheckmarkDone /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
