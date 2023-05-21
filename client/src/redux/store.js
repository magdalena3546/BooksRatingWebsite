import BooksReducer from "./booksRedux";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import initialState from "./initialState";
import thunk from "redux-thunk";

const subreducers = {
  books: BooksReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
