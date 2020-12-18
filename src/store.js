import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers); // for createStore function

export const configureStore = () => createStore(rootReducer);