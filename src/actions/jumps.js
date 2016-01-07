import {Map} from 'immutable';
import {pushPath} from 'redux-simple-router';

var Promise = require('promise');
var agent = require('superagent-promise')(require('superagent'), Promise);

export const REQUEST_JUMPS = 'REQUEST_JUMPS';
export const RECEIVE_JUMPS = 'RECEIVE_JUMPS';
export const REQUEST_JUMP = 'REQUEST_JUMP';
export const RECEIVE_JUMP = 'RECEIVE_JUMP';
export const SELECT_JUMP = 'SELECT_JUMP';
export const UPDATE_JUMP = 'UPDATE_JUMP';
export const CREATE_JUMP = 'CREATE_JUMP';
export const PERSIST_JUMP = 'PERSIST_JUMP';

function shouldFetch(state, index) {
    return true;
    const element = state.get(index);
    if (!element && !element.isFetching) {
        return true;
    } else {
        return false;
    }
}

/* Handle jumps list requests */
function requestJumps(params) {
    return {
        type: REQUEST_JUMPS,
        payload: params
    }
}

export function receiveJumps(json) {
    return {
        type: RECEIVE_JUMPS,
        payload: {
            jumps: json.data.children.map(child => child.data),
            receivedAt: Date.now()
        }
    }
}

function doFetchJumps(params) {
    return dispatch => {
        dispatch(requestJumps(params));
        return agent('GET', '//localhost:8000/jumps')
            .end()
            .then(response => response.body)
            .then(data => dispatch(receiveJumps(data)));
    }
}

export function fetchJumps(params) {
    return (dispatch, getState) => {
        if (shouldFetch(getState(), params)) {
            return dispatch(doFetchJumps(params));
        }
    }
}

/* Handle jump requests */
function doRequestJump(id) {
    return {
        type: REQUEST_JUMP,
        payload: {
            id: id
        }
    }
}

function receiveJump(json) {
    return {
        type: RECEIVE_JUMP,
        payload: {
            jump: json.data,
            receivedAt: Date.now()
        }
    };
}

function doFetchJump(id) {
    return dispatch => {
        dispatch(doRequestJump(id));
        return agent('GET', '//localhost:8000/jumps/' +id)
            .end()
            .catch(err => console.log(err.status)) // todo... not found + deselect...
            .then(response => response.body)
            .then(data => {
                dispatch(receiveJump(data));
                dispatch(pushPath('/jumps/' + id));
            })
            ;
    }
}

function fetchJump(id) {
    return (dispatch, getState) => {
        if (shouldFetch(getState(), 'jump')) {
            return dispatch(doFetchJump(id))
        }
    }
}

export function requestJump(jumpId) {
    return (dispatch, getState) => {
        if (shouldFetch(getState().jump, jumpId)) {
            return dispatch(doFetchJump(jumpId))
        }
    }
}

export function selectJump(index, jumpId) {
    return (dispatch) => {
        dispatch(doFetchJump(jumpId));
        return {
            type: SELECT_JUMP,
            payload: {
                index: index
            }
        }
    };
}

