import { v4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  initialState,
  name: "todos",
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newTodo = { id: v4(), title: action.payload, completed: false };
      state.push(newTodo);
    },
    completed: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      todo.completed = !todo.completed;
    },
    unCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      todo.completed = false;
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
    allCompleted: (state) => {
      return state.map((todo) => ({ ...todo, completed: !todo.completed }));
    },
    deleteAll: () =>{
      return [] as Todo[];
    }
  },
});

export default todoSlice.reducer;

export const { add, remove, completed, unCompleted, deleteCompleted, allCompleted, deleteAll } = todoSlice.actions;
