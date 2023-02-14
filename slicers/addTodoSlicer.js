import { createSlice } from "@reduxjs/toolkit";

export const addTodoSlicer = createSlice({
  name: "todos",
  initialState: { myTodos: [{ title: "wash the car", id: "2" }] },
  reducers: {
    addNewTodo: (state, action) => {
      state.myTodos.push({
        title: action.payload,
        id: String(Math.random()).slice(2, 10),
      });
    },
    deleteTodo: (state, action) => {
      state.myTodos = state.myTodos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addNewTodo, deleteTodo } = addTodoSlicer.actions;
export const allTodos = (state) => state.myTodos;
export default addTodoSlicer.reducer;
