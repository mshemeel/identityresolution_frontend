import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from 'redux-logger';

const middleware = [thunk];

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware,loggerMiddleware))
);

export default store;
