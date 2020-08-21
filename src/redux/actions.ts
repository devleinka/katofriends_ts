import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'
import { Dispatch } from 'react';
import { Action } from './reducers';

export const setSearchField = (text: string) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: 'REQUEST_ROBOTS_PENDING', payload: null });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}