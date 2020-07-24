import { combineReducers } from 'redux';
import todoReducer from "../todo/todoReducer";

const rootReducers = combineReducers({
    todo: todoReducer
});

export default rootReducers;