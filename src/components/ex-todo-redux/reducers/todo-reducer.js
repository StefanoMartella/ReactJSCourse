import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./../action-types/todo-actions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
