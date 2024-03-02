import {
  FETCH_DEALS_REQUEST,
  FETCH_DEALS_FAILURE,
  FETCH_DEALS_SUCCESS,
} from "./actionTypes";

export const fetchDealsRequest = (payload) => {
  return {
    type: FETCH_DEALS_REQUEST,
    payload,
  };
};

export const fetchDealsSuccess = (payload) => ({
  type: FETCH_DEALS_SUCCESS,
  payload,
});

export const fetchDealsFailure = (payload) => ({
  type: FETCH_DEALS_FAILURE,
  payload,
});
