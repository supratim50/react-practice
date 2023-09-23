import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  //   useEffect(() => {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }, [todos]);

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
