import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './reducers/homeReducers/home.reducer';
import { aboutReducer } from './reducers/AboutReducers/about.reducer';

const reducers = combineReducers({
  homeReducer,
  aboutReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.srr = store;

export default store;
