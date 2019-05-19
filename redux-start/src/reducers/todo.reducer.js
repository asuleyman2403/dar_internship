import { ADD_TODO } from '../actions/todo.action';

const initialState = {
    list : []
};

export default function (state = initialState, action){
    switch (action.type) {
        case ADD_TODO:
            let list = [...state.todo.list];
            list.push(action.payload);
            return{
                ...state,
                list
            }    
        default:
            return state;
    }
}