import { SET_PAGINATION, RESET_PAGINATION } from "./actionTypes";

export const setPagination = (payload) => {
  return {
    type: SET_PAGINATION,
    payload,
  };
};

export const resetPagination = () => {
  return {
    type: RESET_PAGINATION,
  };
};
