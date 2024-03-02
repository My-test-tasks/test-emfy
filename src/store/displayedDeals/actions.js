import { SORTING_DEALS } from "./actionTypes";

export const sortingDeals = (payload) => {
  return {
    type: SORTING_DEALS,
    payload,
  };
};
