import { createContext, useContext } from "react";

const TodoContext  = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;
