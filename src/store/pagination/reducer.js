import { SET_PAGINATION, RESET_PAGINATION } from "./actionTypes";

const initialState = {
  first: false,
  prev: false,
  page: 1,
  next: false,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        first: action.payload.first,
        prev: action.payload.prev,
        page: action.payload.page,
        next: action.payload.next,
      };

    case RESET_PAGINATION:
      return {
        ...state,
        ...initialState,
      };

    default:
      return {
        ...state,
      };
  }
};
