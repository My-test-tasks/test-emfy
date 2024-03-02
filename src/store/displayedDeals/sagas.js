import { all, put, select, takeLatest } from "redux-saga/effects";
import { sortingDeals } from "./actions";
import { SORT } from "../../const/sort";
import { SET_SORT_TYPE } from "../sort/actionTypes";
import { FETCH_DEALS_SUCCESS } from "../deals/actionTypes";

function* sortingDealsSaga() {
  const type = yield select((state) => state.sort.type);
  const deals = yield select((state) => [...state.deals.items]);

  if (type === SORT.NAME_ASC) {
    const sortedDeals = deals.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    yield put(sortingDeals(sortedDeals));
  }

  if (type === SORT.NAME_DESC) {
    const sortedDeals = deals.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });

    yield put(sortingDeals(sortedDeals));
  }

  if (type === SORT.PRICE_ASC) {
    const sortedDeals = deals.sort((a, b) => a.price - b.price);

    yield put(sortingDeals(sortedDeals));
  }

  if (type === SORT.PRICE_DESC) {
    const sortedDeals = deals.sort((a, b) => b.price - a.price);

    yield put(sortingDeals(sortedDeals));
  }

  if (type === SORT.WITHOUT_SORT) {
    yield put(sortingDeals(deals));
  }
}

export function* displayedDealsSaga() {
  yield all([
    takeLatest(SET_SORT_TYPE, sortingDealsSaga),
    takeLatest(FETCH_DEALS_SUCCESS, sortingDealsSaga),
  ]);
}
