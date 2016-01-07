import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router'
import jumps from './jumps';
// import recuderX from './reducerX';

module.exports = combineReducers({
    jumps: jumps,
    routing: routeReducer
});
