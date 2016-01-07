import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routeReducer } from 'redux-simple-router'
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

let middleware = [ thunk ];

const finalCreateStore = compose(
    applyMiddleware(...middleware)(createStore)
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(reducers, initialState);
};
