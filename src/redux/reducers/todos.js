import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  ACTIVE_TODO,
} from "../constants/todos";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,

        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.todo,
            active: action.active,
          },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todos.id !== action.id),
      };

    case DELETE_ALL_TODO:
      return {
        ...state,
        todos: [],
      };
    case ACTIVE_TODO:
      return {
        ...state,

        todos: [
          ...state.todos.map((todo) => {
            if (todos.id !== action.id) {
              return todo;
            }
            return {
              ...todo,
              active: !todo.active,
            };
          }),
        ],
      };

    default:
      return state;
  }
};

export default todos;
