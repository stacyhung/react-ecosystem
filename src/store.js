import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to local storage on the web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // tells ReduxPersist how deep to go
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers); // for createStore function
const persistedReducer = persistReducer(persistConfig, rootReducer); // persistConfig tells us where to save and how to store app data

export const configureStore = () =>
    createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );