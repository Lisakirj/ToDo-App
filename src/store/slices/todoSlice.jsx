import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../mockData.json";

const initialState = {
  entities: mockData,
  errors: null,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.entities.push(action.payload);
    },
    todoRemoved(state, action) {
      state.entities = state.entities.filter(
        (todo) => todo.id !== action.payload
      );
    },
    todoUpdated(state, action) {
      state.entities = state.entities.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });
    },
    completeStatusChanged(state, action) {
      state.entities = state.entities.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isComplete: action.payload.status,
          };
        }
        return todo;
      });
    },
    favouriteStatusSet(state, action) {
      state.entities = state.entities.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            favourite: action.payload.status,
          };
        }
        return todo;
      });
    },
  },
});

const { actions, reducer: todoReducer } = todoSlice;
const {
  todoAdded,
  todoRemoved,
  todoUpdated,
  completeStatusChanged,
  favouriteStatusSet,
} = actions;
//
export const addTodo = (newTodo) => (dispatch, getState) => {
  const state = getState();
  const todo = {
    id: state.todo.entities.length + 1,
    title: newTodo,
    date: new Date().toLocaleString(),
    isComplete: "false",
    favourite: "false",
  };
  dispatch(todoAdded(todo));
};

export const removeTodo = (id) => (dispatch) => {
  dispatch(todoRemoved(id));
};

export const updateTodo =
  ({ title, id }) =>
  (dispatch) => {
    dispatch(todoUpdated({ id, title }));
  };

export const setCompleteStatus =
  ({ id, status }) =>
  (dispatch) => {
    dispatch(completeStatusChanged({ id, status }));
  };

export const setFavouriteStatus =
  ({ id, status }) =>
  (dispatch) => {
    dispatch(favouriteStatusSet({ id, status }));
  };

//selectors
export const getTodos = () => (state) => state.todo.entities;
export const getErrors = () => (state) => state.todo.errors;
export default todoReducer;
