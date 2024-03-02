import { combineReducers } from "redux";
import { dealsReducer } from "./deals/reducer";
import { sortReducer } from "./sort/reducer";
import { limitReducer } from "./limit/reducer";
import { paginationReducer } from "./pagination/reducer";
import { displayedDealsReducer } from "./displayedDeals/reducer";

export const rootReducer = combineReducers({
  deals: dealsReducer,
  displayedDeals: displayedDealsReducer,
  sort: sortReducer,
  limit: limitReducer,
  pagination: paginationReducer,
});
