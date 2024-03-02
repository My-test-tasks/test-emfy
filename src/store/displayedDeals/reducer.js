import { SORTING_DEALS } from "./actionTypes";

const initialState = {
  items: [],
};

export const displayedDealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORTING_DEALS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
