import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import country from "./country/reducer";
import countrySaga from "./country/sagas";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const reducers = combineReducers({ country });

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(countrySaga);

export default store;
