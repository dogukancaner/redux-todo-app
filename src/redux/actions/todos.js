import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  ACTIVE_TODO,
} from "../constants/todos";

export const addTodo = (id, todo, active) => {
  return {
    type: ADD_TODO,
    id,
    todo,
    active,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const deleteAllTodo = () => {
  return {
    type: DELETE_ALL_TODO,
  };
};

export const activeTodo = (id, active) => {
  return {
    type: ACTIVE_TODO,
    id,
    active,
  };
};
