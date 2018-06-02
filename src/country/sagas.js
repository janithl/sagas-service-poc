import { call, put, takeLatest } from "redux-saga/effects";
import { ACTIONS, fetchCountrySucceeded } from "./actions";

import CountryService from "./CountryService";

function* fetchCountry(action) {
  try {
    const country = yield call(
      CountryService.fetchCountry,
      action.payload.code
    );
    yield put(fetchCountrySucceeded(country));
  } catch (error) {
    yield put({ type: ACTIONS.FETCH_COUNTRY_FAILURE });
  }
}

export default function* saga() {
  yield takeLatest(ACTIONS.FETCH_COUNTRY_REQUEST, fetchCountry);
}
