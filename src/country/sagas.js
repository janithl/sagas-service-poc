import { call, put, select, takeLatest } from "redux-saga/effects";
import { ACTIONS, fetchCountrySucceeded } from "./actions";

import CountryService from "./CountryService";

const getCode = state => state.country.code;

function* fetchCountry() {
  try {
    const code = yield select(getCode);
    const country = yield call(CountryService.getCountryByCode, code);
    yield put(fetchCountrySucceeded(country));
  } catch (error) {
    yield put({ type: ACTIONS.FETCH_COUNTRY_FAILURE });
  }
}

export default function* saga() {
  yield takeLatest(ACTIONS.FETCH_COUNTRY_REQUEST, fetchCountry);
}
