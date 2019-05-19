import { GET_TASKS, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/todo.action";

const initialState = {};

export default function(state = initialState, action){
    switch(action.type){
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };

        case CREATE_TASK:
            return {
                ...state,
                tasks: action.payload
            };

        case UPDATE_TASK:
            return {
                ...state,
                tasks: action.payload
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: action.payload
            };

        default:
            return state;
    }
}
