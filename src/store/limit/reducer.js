import { SET_PAGE_LIMIT } from "./actionTypes";

const initialState = {
  value: 5,
};

export const limitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_LIMIT:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
