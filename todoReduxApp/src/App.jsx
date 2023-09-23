import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { useDispatch } from "react-redux";
import { setTodo } from "./features/todo/TodoSlice";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));

  //   if (todos && todos.length > 0) {
  //     dispatch(setTodo(todos));
  //   }
  // }, []);

  return (
    <>
      <div className="w-full p-4 h-screen bg-gray-500">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Todo App
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
