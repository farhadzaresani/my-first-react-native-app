import { configureStore } from "@reduxjs/toolkit";
import addTodoSlicer from "../slicers/addTodoSlicer";



export const store= configureStore({
    reducer:{
        myTodos: addTodoSlicer
    }
})