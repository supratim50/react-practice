import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

// create the slice
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      // FInd the index of changable todo
      const indexOfChangableTodo = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      // replace the text using spread operator
      const newTodo = {
        ...state.todos[indexOfChangableTodo],
        ...{ text: action.payload.text },
      };
      // replace the new todo
      state.todos[indexOfChangableTodo] = newTodo;
    },
  },
});

export const { setTodo, addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
