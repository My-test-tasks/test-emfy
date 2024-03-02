import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchDealsFailure, fetchDealsSuccess } from "./actions";
import { FETCH_DEALS_REQUEST } from "./actionTypes";
import { API } from "@/configs/api";
import { request } from "@/api";
import { setPagination } from "../pagination/actions";
import { requestTimeout } from "../../utils/requestTimeout";

export const getDeals = async ({ limit, page }) => {
  const body = {
    method: "GET",
    url: `${API.url}/api/v4/leads?limit=${limit}&page=${page}`,
    headers: { Authorization: `Bearer ${API.access_token}` },
  };

  const result = await request(body);

  return result.payload;
};

export const getAllDeals = async () => {
  let page = 1;
  const limit = 5;

  const result = await getDeals({ limit, page });

  while (result._links.next) {
    page += 1;

    await requestTimeout(1);

    const tmp = await getDeals({ limit, page });

    result._embedded.leads = [
      ...result._embedded.leads,
      ...tmp._embedded.leads,
    ];

    result._links.next = tmp._links.next;
  }

  return result;
};

function* fetchDealsSaga({ payload }) {
  const params = {
    limit: payload.limit,
    page: payload.page,
  };

  try {
    const response =
      payload.limit === 0
        ? yield call(getAllDeals)
        : yield call(getDeals, params);

    yield put(
      fetchDealsSuccess({
        deals: response._embedded.leads,
      })
    );

    yield put(
      setPagination({
        first: Boolean(response._links?.first),
        prev: Boolean(response._links?.prev),
        page: response._page,
        next: Boolean(response._links?.next),
      })
    );
  } catch (e) {
    yield put(
      fetchDealsFailure({
        error: e.message,
      })
    );
  }
}

export function* dealsSaga() {
  yield all([takeLatest(FETCH_DEALS_REQUEST, fetchDealsSaga)]);
}
