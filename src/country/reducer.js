import { ACTIONS } from "./actions";

export const initialState = {
  code: "",
  fetching: false,
  country: {}
};

export default function reducer(state = initialState, action = null) {
  switch (action.type) {
    case ACTIONS.EDIT_COUNTRY_CODE:
      return { ...state, code: action.payload.code };

    case ACTIONS.FETCH_COUNTRY_REQUEST:
      return { ...state, fetching: true };

    case ACTIONS.FETCH_COUNTRY_SUCCESS:
      return { ...state, country: action.payload.country, fetching: false };

    case ACTIONS.FETCH_COUNTRY_FAILURE:
      return { ...state, fetching: false };

    default:
      return state;
  }
}
