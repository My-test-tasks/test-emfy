import { SET_PAGE_LIMIT } from "./actionTypes";

export const setPageLimit = (payload) => {
  return {
    type: SET_PAGE_LIMIT,
    payload,
  };
};
