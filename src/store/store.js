import { configureStore } from "@reduxjs/toolkit";
import todoSclice from "./slices/todoSclice";

export default configureStore({
  reducer: {
    todos: todoSclice,
  },
});
