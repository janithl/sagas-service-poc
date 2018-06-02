export const ACTIONS = {
  EDIT_COUNTRY_CODE: "service-pop/country/edit-code",
  FETCH_COUNTRY_REQUEST: "service-poc/country/request",
  FETCH_COUNTRY_SUCCESS: "service-poc/country/success",
  FETCH_COUNTRY_FAILURE: "service-poc/country/failure"
};

export const fetchCountry = code => ({
  type: ACTIONS.FETCH_COUNTRY_REQUEST,
  payload: { code }
});

export const fetchCountrySucceeded = country => ({
  type: ACTIONS.FETCH_COUNTRY_SUCCESS,
  payload: { country }
});

export const editCountryCode = code => ({
  type: ACTIONS.EDIT_COUNTRY_CODE,
  payload: { code }
});
