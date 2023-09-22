import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, removeTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const addingTodo = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              onClick={addingTodo}
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          {todos.map((todo) => (
            <div className="flex mb-4 items-center" key={todo.id}>
              <p className="w-full  text-green">{todo.text}</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
                Not Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
