import { SET_SORT_TYPE } from "./actionTypes";

export const setSortType = (payload) => {
  return {
    type: SET_SORT_TYPE,
    payload,
  };
};
