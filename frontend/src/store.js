import data from "./datalist";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
const initialState = {};
const reducer = (state, action) => {
  return { products: data.product };
};
const conposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  conposeEnhancer(applyMiddleware(thunk))
);

export default store;
