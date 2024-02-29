import {  applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"; // Import createStore instead of legacy_createStore
import {thunk} from "redux-thunk"; // Import thunk without braces

import { todoReducer } from "./Redux/ReducerTodo";



const root = combineReducers({

  todo:todoReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(root, composeEnhancer(applyMiddleware(thunk))); // Use createStore instead of legacy_createStore


// console.log('store',store.getState())