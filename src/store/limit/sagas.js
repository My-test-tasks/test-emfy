import { all, put, takeLatest } from "redux-saga/effects";
import { SET_PAGE_LIMIT } from "./actionTypes";

import { resetPagination, setPagination } from "../pagination/actions";

function* resetPaginationSaga() {
  yield put(resetPagination());
}

export function* paginationSaga() {
  yield all([takeLatest(SET_PAGE_LIMIT, resetPaginationSaga)]);
}
