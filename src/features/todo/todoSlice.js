import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: Math.random(),
    text: "learn JS",
    isCompleted: false,
  },
  {
    id: Math.random(),
    text: "learn Css",
    isCompleted: false,
  },
  {
    id: Math.random(),
    text: "learn React",
    isCompleted: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
          isCompleted: false,
        },
      ];
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },

    changeTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    clearCompleted: (state, action) => {
           return  state.filter((todo) => {
        return !todo.isCompleted
      });     
    },
  },
});

export const { addTodo, deleteTodo, changeTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
