import { combineReducers } from "redux";
import todoReducer from './todo.reducer';

const appReducer = combineReducers({
    todo: todoReducer,
});


export default appReducer;
