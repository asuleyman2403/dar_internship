import {ADD_TODO, DELETE_TODO, EDIT_TODO, MAKE_DONE, SAVE_TODO} from "../actions/todo.action";

const initialState = {
    list: []
};

export default function(state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            let list = [...state.list];
            list.push(action.payload);
            return{
                ...state,
                list
            };

        case EDIT_TODO:
            state.list[action.payload].disabled = false;
            return{
                ...state
            };

        case DELETE_TODO:
            state.list.splice(action.payload, 1);
            return{
                ...state
            };

        case SAVE_TODO:
            state.list[action.payload.index].disabled = true;
            state.list[action.payload.index].text = action.payload.value;
            return{
                ...state
            };

        case MAKE_DONE:
            state.list[action.payload].done = true;
            return{
                ...state
            };

        default:
            return state;
    }
}


