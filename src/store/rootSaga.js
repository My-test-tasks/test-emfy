import { all, fork } from "redux-saga/effects";

import { dealsSaga } from "./deals/sagas";
import { paginationSaga } from "./limit/sagas";
import { displayedDealsSaga } from "./displayedDeals/sagas";

export function* rootSaga() {
  yield all([fork(dealsSaga), fork(paginationSaga), fork(displayedDealsSaga)]);
}
