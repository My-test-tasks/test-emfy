import {
  FETCH_DEALS_REQUEST,
  FETCH_DEALS_SUCCESS,
  FETCH_DEALS_FAILURE,
} from "./actionTypes";

const initialState = {
  pending: false,
  items: [],
  error: null,
};

export const dealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEALS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DEALS_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.payload.deals,
        error: null,
      };
    case FETCH_DEALS_FAILURE:
      return {
        ...state,
        pending: false,
        items: [], //TODO мб не чистить
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
