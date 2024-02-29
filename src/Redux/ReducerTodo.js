import { Add_TODO, Delete_TODO, Modify_Todo, clearAllTodo } from "./ActionType";

const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  debugger;
  switch (type) {
    case Add_TODO: {
      if (payload) {
        return {
          ...state,
          todoList: [
            ...state.todoList,
            {
              check: false,
              item: payload,
            },
          ],
        };
      }
    }
    case Delete_TODO: {
      if (payload) {
        return {
          ...state,
          todoList: state.todoList.filter(
            (el, index) => index !== payload.index
          ),
        };
      }
    }
    case Modify_Todo: {
      // console.log(payload,'inside reducer')
      if (payload.index == 0 || payload.index) {
        return {
          ...state,
          // todoList:state.todoList.map((el,i)=> console.log(el,'elememnt'))
          todoList: state.todoList.map((el, i) =>
            i === payload.index ? { ...el, check: !el.check } : el
          ),
        };
      }
    }
    case clearAllTodo: {
      return {
        ...state,
        todoList: state.todoList.filter((el, i) => el.check == false),
      };
    }
    default:
      return state;
  }
};
