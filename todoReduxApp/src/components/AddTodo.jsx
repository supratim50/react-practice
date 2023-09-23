import React, { useRef, useState } from "react";
import { addTodo } from "../features/todo/TodoSlice";

import { useDispatch } from "react-redux";

const AddTodo = () => {
  const inputRef = useRef(null);
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const onSubmission = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(addTodo(todo));
    }
    inputRef.current.focus();
    setTodo("");
  };

  return (
    <form className="space-x-3 mt-12" onSubmit={onSubmission}>
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
