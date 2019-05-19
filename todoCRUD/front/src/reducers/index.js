import { combineReducers } from "redux";
import tasksReducer from './todo.reducer';

const appReducer = combineReducers({
    tasks: tasksReducer
});

export default appReducer;
