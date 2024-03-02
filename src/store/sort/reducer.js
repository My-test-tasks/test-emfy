import { SET_SORT_TYPE } from "./actionTypes";
import { SORT } from "@/const/sort";

const initialState = {
  type: SORT.WITHOUT_SORT,
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
