import logger from "./logger";

const BASE_URL = "https://restcountries.eu/rest/v2";

const onSuccessDefault = response => {
  logger.log("got response");
  return response.json();
};

const onErrorDefault = error => {
  logger.error("response error", error);
  return error;
};

const request = (
  endpoint,
  onSuccess = onSuccessDefault,
  onError = onErrorDefault,
  options = {}
) => {
  const url = [BASE_URL, endpoint].join("/");
  logger.log("fetching request w/ ", url, options);
  return fetch(url, options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
