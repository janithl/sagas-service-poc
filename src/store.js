import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import country from "./country/reducer";
import countrySaga from "./country/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(country, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(countrySaga);

export default store;
