import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { title, description, deadline } = action.payload;

      state.push({
        id: Date.now(),
        title,
        description,
        deadline,
        completed: false,
      });
    },

    deleteTodo: (state, action) => {
      const todoId = action.payload;

      return state.filter((todo) => todo.id !== todoId);
    },

    updateTodo: (state, action) => {
      const { id, title, description, deadline } = action.payload;

      const todoIndex = state.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        state[todoIndex] = {
          ...state[todoIndex],
          title,
          description,
          deadline,
        };
      }
    },

    toggleCompleted: (state, action) => {
      const todoId = action.payload;

      const todoIndex = state.findIndex((todo) => todo.id === todoId);

      if (todoIndex !== -1) {
        state[todoIndex].completed = !state[todoIndex].completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
